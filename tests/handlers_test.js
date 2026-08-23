'use strict';

// Unit tests for src/handlers.js — mock interactions, no network.
// Run: node tests/handlers_test.js

const assert = require('node:assert');
const { dispatch } = require('../src/handlers');

function makeInteraction(commandName, extra = {}) {
  const replies = [];
  return {
    commandName,
    replied: false,
    deferred: false,
    isChatInputCommand: () => true,
    reply: async (payload) => {
      replies.push(payload);
    },
    client: {},
    guild: null,
    ...extra,
    _replies: replies,
  };
}

(async () => {
  let passed = 0;
  const allContents = [];

  // ping
  let i = makeInteraction('ping', { client: { ws: { ping: -1 } } });
  assert.strictEqual(await dispatch(i), true);
  assert.strictEqual(i._replies[0].content, 'pong');
  allContents.push(i._replies[0].content);
  passed++;

  // ping with latency
  i = makeInteraction('ping', { client: { ws: { ping: 42.6 } } });
  await dispatch(i);
  assert.match(i._replies[0].content, /^pong \(43ms\)$/);
  allContents.push(i._replies[0].content);
  passed++;

  // map, empty config
  i = makeInteraction('map');
  await dispatch(i);
  assert.strictEqual(i._replies[0].content, 'No links set yet.');
  allContents.push(i._replies[0].content);
  passed++;

  // audit in a server
  const guild = {
    memberCount: 2,
    channels: { fetch: async () => {}, cache: { size: 7 } },
  };
  i = makeInteraction('audit', { guild });
  await dispatch(i);
  assert.match(i._replies[0].content, /channels: 7/);
  assert.match(i._replies[0].content, /members: 2/);
  allContents.push(i._replies[0].content);
  passed++;

  // audit outside a server (guild == null)
  i = makeInteraction('audit');
  await dispatch(i);
  assert.strictEqual(i._replies[0].content, 'audit: server only.');
  allContents.push(i._replies[0].content);
  passed++;

  // unknown command -> not handled, no reply sent
  i = makeInteraction('nonsense');
  assert.strictEqual(await dispatch(i), false);
  assert.strictEqual(i._replies.length, 0);
  passed++;

  // non-slash interaction -> ignored
  i = makeInteraction('ping');
  i.isChatInputCommand = () => false;
  assert.strictEqual(await dispatch(i), false);
  assert.strictEqual(i._replies.length, 0);
  passed++;

  // handler that throws -> fallback reply, no crash
  i = makeInteraction('ping');
  i.reply = async () => {
    throw new Error('discord 400');
  };
  assert.strictEqual(await dispatch(i), false);
  passed++;

  // BRAND RULES (testable art-direction): terse, no mascot words, never "AI-powered"
  for (const c of allContents) {
    assert.doesNotMatch(c, /ai-powered/i, 'brand violation: AI-powered');
    assert.doesNotMatch(c, /mascot|faby|fabby|cute/i, 'brand violation: mascot drift');
    assert.ok(c.length <= 120, `not terse (${c.length} chars): ${c}`);
  }
  passed++;

  console.log(JSON.stringify({ step: 'handlers_test', ok: true, passed }));
})().catch((e) => {
  console.error(JSON.stringify({ step: 'handlers_test', ok: false, error: e.message }));
  process.exit(1);
});
