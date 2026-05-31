# React + TypeScript Interview Rescue Sheet

## Interview Approach

When given a problem:

1. Clarify requirements
2. Identify state
3. Identify derived data
4. Render UI
5. Add interactions
6. Refactor
7. Discuss improvements

---

# Common Clarifying Questions

- Should search be case-sensitive?
- Should sorting toggle asc/desc?
- Can filters be combined?
- Should data persist on refresh?
- What should happen when there are no results?
- What edge cases should I consider?

---

# React Mental Toolbox

| Problem | Tool |
|----------|--------|
| Store data | useState |
| Render a list | map |
| Search/filter | filter |
| Find one item | find |
| Sort data | sort |
| Fetch data | useEffect |
| Optimize expensive work | useMemo |
| Share logic | Custom Hook |
| Share state | Lift state up |

---

# useState

## String

```tsx
const [searchTerm, setSearchTerm] = useState("");
```

## Boolean

```tsx
const [isOpen, setIsOpen] = useState(false);
```

## Array

```tsx
const [items, setItems] = useState<Item[]>([]);
```

## Object

```tsx
const [user, setUser] = useState<User | null>(null);
```

## Previous State

```tsx
setCount((prev) => prev + 1);
```

---

# useEffect

## Run Once

```tsx
useEffect(() => {
  fetchData();
}, []);
```

## Run When Dependency Changes

```tsx
useEffect(() => {
  searchData();
}, [searchTerm]);
```

## Cleanup

```tsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener(
      "resize",
      handleResize
    );
  };
}, []);
```

---

# Fetch + Loading + Error Pattern

```tsx
const [data, setData] = useState<User[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/users");

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();

      setData(data);
    } catch (err) {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);
```

---

# Conditional Rendering

## Loading

```tsx
if (loading) {
  return <p>Loading...</p>;
}
```

## Error

```tsx
if (error) {
  return <p>{error}</p>;
}
```

## Ternary

```tsx
{
  items.length === 0 ? (
    <p>No Results</p>
  ) : (
    <Results />
  );
}
```

## Logical AND

```tsx
{
  isOpen && <Modal />;
}
```

---

# Controlled Inputs

```tsx
const [value, setValue] = useState("");
```

```tsx
<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

---

# TypeScript Types

## Object

```ts
type Instrument = {
  id: number;
  name: string;
  temperature: number;
};
```

## Interface

```ts
interface User {
  id: number;
  name: string;
}
```

## Array

```ts
const users: User[] = [];
```

## Optional Property

```ts
type User = {
  name: string;
  age?: number;
};
```

## Union

```ts
type Status =
  | "active"
  | "inactive";
```

## Nullable

```ts
const [user, setUser] =
  useState<User | null>(null);
```

---

# Props

```ts
type Props = {
  title: string;
  count: number;
};
```

```tsx
function Card({
  title,
  count,
}: Props) {
  return (
    <div>
      {title}
    </div>
  );
}
```

---

# Common Event Types

## Input

```tsx
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setValue(e.target.value);
};
```

## Select

```tsx
const handleSelect = (
  e: React.ChangeEvent<HTMLSelectElement>
) => {
  setValue(e.target.value);
};
```

## Button

```tsx
const handleClick = (
  e: React.MouseEvent<HTMLButtonElement>
) => {};
```

---

# Array Methods

## map

Render items.

```tsx
items.map((item) => (
  <li key={item.id}>
    {item.name}
  </li>
));
```

---

## filter

Search/filter items.

```tsx
items.filter((item) =>
  item.name
    .toLowerCase()
    .includes(search.toLowerCase())
);
```

---

## find

Get one item.

```tsx
items.find(
  (item) => item.id === id
);
```

---

## some

Returns boolean.

```tsx
items.some(
  (item) => item.selected
);
```

---

## sort

Ascending.

```tsx
[...items].sort(
  (a, b) => a.age - b.age
);
```

Descending.

```tsx
[...items].sort(
  (a, b) => b.age - a.age
);
```

IMPORTANT:

```tsx
[...items]
```

because sort mutates arrays.

---

## reduce

Totals/counts.

```tsx
const total = items.reduce(
  (sum, item) => sum + item.price,
  0
);
```

---

# Search Pattern

```tsx
const filteredItems = items.filter(
  (item) =>
    item.name
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      )
);
```

---

# Sorting Pattern

```tsx
const sortedItems = [
  ...filteredItems,
].sort((a, b) =>
  sortDirection === "asc"
    ? a.value - b.value
    : b.value - a.value
);
```

---

# useMemo

```tsx
const filteredData = useMemo(() => {
  return items.filter(...);
}, [items, searchTerm]);
```

Use when:
- Expensive filtering
- Expensive sorting
- Large datasets

---

# Semantic HTML

## Layout

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

---

## Form

```html
<form>
<label>
<input>
<select>
<textarea>
<button>
```

---

## Table

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Value</td>
    </tr>
  </tbody>
</table>
```

---

# Accessibility Quick Reminders

## Use Buttons

GOOD

```html
<button>
  Save
</button>
```

BAD

```html
<div onclick="">
  Save
</div>
```

---

## Labels

```html
<label htmlFor="search">
  Search
</label>

<input id="search" />
```

---

## Images

```html
<img
  src="graph.png"
  alt="Temperature graph"
/>
```

---

# Common Follow-Up Answers

## Why not store filtered data in state?

Because it's derived from existing state and can be calculated when needed.

---

## How would you scale this?

- Pagination
- Virtualization
- Memoization
- Server-side filtering

---

## What would you test?

- Search functionality
- Sorting
- Filtering
- Loading state
- Error state
- Empty state

---

## What would you refactor?

- Extract reusable components
- Extract custom hooks
- Improve accessibility
- Improve test coverage

---

# Interview Recovery Phrases

When stuck:

"I'll start with the simplest version and iterate."

"I'd like to get the basic functionality working first, then refine it."

"I'm thinking about what state I actually need versus what can be derived."

"I'm going to verify this works before adding additional complexity."

"If this logic were reused elsewhere, I'd consider extracting it into a custom hook."

---

# Final Reminder

When you freeze, ask:

1. What state do I need?
2. What can be derived?
3. Can I render the data first?
4. Can I add one feature at a time?

Build:

Render → Search → Filter → Sort → Refactor

Don't try to solve the entire problem at once.
