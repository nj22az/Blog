# How to Create a New Blog Post

Creating a new post for this blog is a simple, two-step process. This guide will walk you through creating the content file and then making it visible on the website. This workflow is designed to separate content from presentation, allowing you to focus on writing.

### Step 1: Write Your Article in Markdown

First, you need to create the actual content of your post. All articles are written in Markdown, a lightweight markup language that's easy to learn.

1.  Navigate to the `public/blog/posts/` directory in this project.
2.  Create a new file with a `.md` extension. The filename should be a "slug"—a URL-friendly version of your title (e.g., `my-first-amazing-post.md`).
3.  Write your content inside this file using standard Markdown syntax. The website's styling will automatically handle the fonts, colors, and spacing to match the site's design.

### Step 2: Add Metadata to `posts.json`

Just creating the file isn't enough; you need to tell the application that your post exists. You do this by adding an entry to the `public/blog/posts.json` file. This file acts as a manifest for all the articles on the blog.

1.  Open the `public/blog/posts.json` file.
2.  Add a new JSON object to the **very top** of the array. This ensures it appears as the most recent post.

The object should have the following structure:

```json
{
  "slug": "my-first-amazing-post",
  "date": "2025-10-27",
  "title": "My First Amazing Post",
  "excerpt": "A short, one-sentence summary of the article that will appear in the post list.",
  "tags": ["Technology", "Guide", "Example"]
}
```

**Important:** The `slug` value **must exactly match** the filename you created in Step 1 (without the `.md` extension).

### Full Post Example & Template

To make it easier, here is a complete example of what a blog post's Markdown file can look like. You can use this as a template for your own articles.

<div class="relative bg-gray-100 border border-gray-300 rounded-lg my-4">
  <button 
    onclick="copyCode(this, 'example-post-code')" 
    class="absolute top-2 right-2 bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-gray-600 transition-colors"
  >
    Copy
  </button>
  <pre class="py-4 pt-8 px-4 overflow-x-auto"><code id="example-post-code"># This is a Main Heading (H1)

This is a standard paragraph. Markdown makes it easy to write clean, readable content. You can make text **bold** for emphasis, or *italic* for nuance.

This paragraph introduces the main topic and sets the stage for the rest of the article. It's a good place to state your main point or thesis.

#### A Smaller Heading for a Sub-Topic (H4)

You can use different heading levels to structure your document. It's best practice to use them hierarchically.

Here is a bulleted list:
*   Item one: Great for unordered points.
*   Item two: Easy to read and scan.
*   Item three: A fundamental part of Markdown.

And here is a numbered list for sequential steps:
1.  First, do this.
2.  Then, do this.
3.  Finally, do this.

You can also display code snippets for technical posts. This is a JavaScript example:
```javascript
function greet(name) {
  // This function takes a name and returns a greeting.
  return `Hello, ${name}! Welcome to the blog.`;
}

console.log(greet('Reader'));
```

It's that simple! You can combine these elements to create a well-structured and engaging blog post.</code></pre>
</div>
<script>
  function copyCode(button, elementId) {
    const codeElement = document.getElementById(elementId);
    if (codeElement) {
      const textToCopy = codeElement.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        button.innerText = 'Copied!';
        setTimeout(() => {
          button.innerText = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        button.innerText = 'Error';
      });
    }
  }
</script>

Once you've completed both steps and saved your files, your new post will automatically appear on the homepage and the archive page.