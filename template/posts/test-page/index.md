---
title: Preview Markdown
desc: Markdown is an easy-to-read, easy-to-write language for formatting plain text. You can use Markdown syntax, along with some additional HTML tag


tags: tag1,tag2
publishedAt: 12/11/2000
updatedAt: 12/13/2000
thumbnail:
    src: ./cover.jpeg
    alt: a futuristic, cube-like structure composed of multiple smaller rectangular module. Used to visualize complexity of quantum computing
    credit:
        name: nicolas arnold
        url: https://unsplash.com/@nicolasarnold
---

# h1

## h2

### h3

#### h4

---

normal

_italic_

**bold**

**_bold+italic_**

this is a combination of all types of text like **bold** , _italic_ & **_bold and italic_**

---

1. numbered list

-   regular list
    -   regular sub-list

---

-   [this is a link](#)
-   https://kavin.is-a.dev
-   hello@example.com

---

<br/>

| Month    | Savings | asdasd | Month    | Savings | asdasd |
| -------- | ------- | ------ | -------- | ------- | ------ |
| January  | `$250`  | asdasd | January  | $250    | asdasd |
| February | $80     | asdasd | February | $80     | asdasd |
| March    | $420    | asdasd | March    | $420    | asdasd |

<br/>

---

<br/>

`inline <code> block`


```js title="app/actions.ts"  showLineNumbers
'use server';
import { track } from '@vercel/analytics/server';

export async function purchase() {
    await track('Item purchased', {
        quantity: 1,
    });
}
```


<br/>

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> This is a note of type `caution`.