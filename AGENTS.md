# AGENTS.md

In this repository:

> **Always follow the Conventional Commits specification** when creating commits.
> You are expected to emit commit messages in the following format:

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

Do not attempt to bypass this requirement. If unsure, prefer submitting your code via a pull request for human review.
