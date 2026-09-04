# TypeScript

A hands-on collection of TypeScript examples covering the language's core features — from type inference to classes and generics. Each topic lives in its own numbered file.

## 📋 Table of Contents

| # | Topic | File |
|---|-------|------|
| 01 | Type Inference | [`01_type_inference.ts`](./src/01_type_inference.ts) |
| 02 | Primitive Types | [`02_primitive_types.ts`](./src/02_primitive_types.ts) |
| 03 | Special Types (`void`, `never`, `any`, unions) | [`03_special_types.ts`](./src/03_special_types.ts) |
| 04 | Objects | [`04_objects.ts`](./src/04_objects.ts) |
| 05 | Literal Types | [`05_literal_types.ts`](./src/05_literal_types.ts) |
| 06 | Type Assertion & Type Guards | [`06_type_assertion.ts`](./src/06_type_assertion.ts) |
| 07 | `as const` | [`07_as_const.ts`](./src/07_as_const.ts) |
| 08 | Union Types | [`08_union_types.ts`](./src/08_union_types.ts) |
| 09 | Intersection Types | [`09_intersection_types.ts`](./src/09_intersection_types.ts) |
| 10 | Arrays | [`10_arrays.ts`](./src/10_arrays.ts) |
| 11 | Tuples | [`11_tuples.ts`](./src/11_tuples.ts) |
| 12 | Functions | [`12_functions.ts`](./src/12_functions.ts) |
| 13 | Interfaces | [`13_interfaces.ts`](./src/13_interfaces.ts) |
| 14 | Type Aliases | [`14_type_aliases.ts`](./src/14_type_aliases.ts) |
| 15 | Types vs. Interfaces | [`15_types_vs_interfaces.ts`](./src/15_types_vs_interfaces.ts) |
| 16 | Index Signatures | [`16_index_signatures.ts`](./src/16_index_signatures.ts) |
| 17 | Type Narrowing | [`17_type_narrowing.ts`](./src/17_type_narrowing.ts) |
| 18 | Generics | [`18_generics.ts`](./src/18_generics.ts) |
| 19 | Utility Types | [`19_utility_types.ts`](./src/19_utility_types.ts) |
| 20 | Classes | [`20_classes.ts`](./src/20_classes.ts) |

## 🛠 Tech Stack

- **[TypeScript](https://www.typescriptlang.org/)** — statically typed superset of JavaScript
- **Node.js** (`>=16.20.0`)
- **ESM** modules (`"type": "module"`)

## 📦 Getting Started

### Prerequisites

- Node.js `>= 16.20.0`
- npm

### Installation

```bash
git clone https://github.com/asifahemmed09/TypeScript.git
cd TypeScript
npm install
```

### Usage

Compile all TypeScript files in `src/` to JavaScript in `dist/`:

```bash
npm run build
```

Watch for changes and recompile automatically:

```bash
npm run dev
```

Compiled output is written to `dist/` alongside source maps and declaration files.

## ⚙️ Configuration

The project is configured via [`tsconfig.json`](./tsconfig.json) with a strict, modern setup:

- **Module system:** `nodenext` targeting `esnext`
- **Strict mode:** enabled, plus `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` for extra type safety
- **Output:** source maps, declaration files, and declaration maps generated on build
- **Module syntax:** `verbatimModuleSyntax` and `isolatedModules` enforced for clean, unambiguous imports/exports

## 📚 Topics Covered

This project walks through TypeScript fundamentals and intermediate concepts, including:

- Type inference and primitive/special types
- Object typing, literal types, and `as const`
- Union and intersection types with type narrowing
- Arrays, tuples, and rest/spread parameters
- Functions (defaults, optional params, overloads)
- Interfaces vs. type aliases, and when to use each
- Index signatures and `Record`
- Generics and constrained generic functions
- Built-in utility types (`Partial`, `Omit`, `Pick`, `Required`, `ReturnType`, `Parameters`, `Exclude`, `NonNullable`)
- Classes, access modifiers, inheritance, and getters/setters

## 👤 Author

**Asif Ahemmed Rahi**

## 📄 License

This project is licensed under the ISC License.
