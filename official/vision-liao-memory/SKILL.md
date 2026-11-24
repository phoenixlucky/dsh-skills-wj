---
name: vision-liao-memory
description: Recall relevant workspace memory during planning and save verified project facts after successful completion.
category: 集成与协作
source-url: https://github.com/topoteretes/cognee/tree/HEAD/.agents/skills
source-note: 对应上游 cognee-recall（召回）与 cognee-improve-sessions（写回会话记忆）两条
---

Recall the project's approved memory while planning, and write back only facts that survived verification. Treat stored memory as reference, not authority: a current instruction outranks it, and unverified guesses never become entries. This guide does not grant tools, permissions, or file access.
