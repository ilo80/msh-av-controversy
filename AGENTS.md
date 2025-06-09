# AGENTS.md

## Conventional Commits

> **Always follow the Conventional Commits specification** when creating commits. You are expected to emit commit messages in the following format:

```
<type>(<scope>): <short imperative description>
```

Valid types include:
`feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`.

The `<scope>` must be lowercase and reflect the logical module affected (e.g., `api`, `parser`, `config`, `agent-core`).

The description must:

* Be written in **English**
* Use the **imperative mood**
* Start with a **lowercase letter**
* **Not** end with a period (`.`)

### Examples

* `feat(agent-core): implement prompt memory buffer`
* `fix(api): handle null response from backend`
* `chore(deps): update tokio to 1.36.0`

Any commit message not conforming to this structure may be rejected or rolled back.

> This formatting enables automated changelog generation and reliable semantic versioning.

Do not attempt to bypass this requirement.

---

## Branch Naming Convention

In addition to commit messages, branch names also follow the following convention and should be written in **English**:

```
<type>/<scope>-<short-description>
```

* **`<type>`** must be one of: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`.
* **`<scope>`** must be lowercase and match the logical module (e.g., `api`, `parser`, `config`, `agent-core`).
* **`<short-description>`** must be lowercase, use hyphens to separate words, and briefly describe the branch purpose.

### Examples

* `feat/agent-core-add-memory-buffer`
* `fix/api-null-response-handling`
* `chore/deps-update-tokio`

Branches not following this naming convention may be rejected by automated checks or require renaming before merging.

---

This formatting ensures consistency across commits, branches, and improves collaboration. Feel free to keep this file updated as conventions evolve.
