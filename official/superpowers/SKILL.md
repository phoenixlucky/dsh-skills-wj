---
name: superpowers
description: >-
  Suites of development-process skills (brainstorming, planning, plans execution, TDD,
  systematic debugging, subagent dispatch, code review request/receipt, git worktrees, branch
  finishing, skill authoring). Use when a task should follow the superpowers workflow instead of
  ad-hoc steps. Full text of all 15 upstream skills lives under reference/.
source-url: https://github.com/obra/superpowers
synced-from: obra/superpowers@22f0b463, 全文镜像于 2026-11-24（15 个 skill 归档在 reference/）
---

# Superpowers（15 个 skill 的集合）

上游 `obra/superpowers` 没有名为 `superpowers` 的单体 skill，`skills/` 下是 15 个并列 skill。本目录把它们的全文原样归档在 `reference/<skill>/`，下表由各 `SKILL.md` 的 frontmatter 自动生成。

| skill | 说明 | 文件 |
| --- | --- | --- |
| [`brainstorming`](reference/brainstorming/SKILL.md) | "You MUST use this before any creative work - creating features, building components, adding functionality, modifying behavior, or planning anything new, in software or out of it (a talk, a business, a renovation)." | 8 |
| [`diagnosing-superpowers`](reference/diagnosing-superpowers/SKILL.md) | Use when a superpowers session went wrong and your human partner wants to know why — repeated work, ignored plans, stumbles, poor results, a skill that didn't fire, "it took too long", "why is it so expensive", "what is it doing" — or wants to build a bug report for the superpowers maintainers, for  | 20 |
| [`dispatching-parallel-agents`](reference/dispatching-parallel-agents/SKILL.md) | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies | 1 |
| [`executing-plans`](reference/executing-plans/SKILL.md) | Use when executing an implementation plan in the current session as the implementer yourself — your human partner chose inline execution, or no subagent tool is available | 3 |
| [`finishing-a-development-branch`](reference/finishing-a-development-branch/SKILL.md) | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work | 1 |
| [`receiving-code-review`](reference/receiving-code-review/SKILL.md) | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation | 1 |
| [`requesting-code-review`](reference/requesting-code-review/SKILL.md) | Use when completing tasks, implementing major features, or before merging to verify work meets requirements | 2 |
| [`subagent-driven-development`](reference/subagent-driven-development/SKILL.md) | Use when executing implementation plans with independent tasks in the current session | 15 |
| [`systematic-debugging`](reference/systematic-debugging/SKILL.md) | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes | 6 |
| [`test-driven-development`](reference/test-driven-development/SKILL.md) | Use when implementing any feature or bugfix, before writing implementation code | 2 |
| [`using-git-worktrees`](reference/using-git-worktrees/SKILL.md) | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback | 1 |
| [`using-superpowers`](reference/using-superpowers/SKILL.md) | Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions | 8 |
| [`verification-before-completion`](reference/verification-before-completion/SKILL.md) | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always | 1 |
| [`writing-plans`](reference/writing-plans/SKILL.md) | Use when you have a spec or requirements for a multi-step task, before touching code | 1 |
| [`writing-skills`](reference/writing-skills/SKILL.md) | Use when creating new skills, editing existing skills, or verifying skills work before deployment | 10 |
