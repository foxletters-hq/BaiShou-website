---
title: What is BaiShou
description: BaiShou’s product positioning, core ideas, and how it differs from Notion and Obsidian.
---

BaiShou is an open-source, local-first AI memory companion.

You write diaries and life fragments locally, and BaiShou summarizes them layer by layer into “memory rings” that AI companions can understand, search, and keep you company with over the long run. Your data doesn’t go into someone else’s cloud account — it stays on your own devices.

> With a pure-white vow, we guard each other for a lifetime.

## What it can do

| Capability | Description |
|------------|-------------|
| Diary | Write in Markdown, with weather, mood, tags, location, and attachments |
| Memory rings | Diaries get summarized layer by layer into weekly journals, monthly reports, quarterly reports, and yearbooks |
| AI companions | Multiple companions, each with its own persona and model, able to call tools to read and write diaries and memories |
| RAG semantic memory | Vector search plus full-text search, so companions can actually find the details you wrote down |
| Workspaces | Multiple workspaces with data isolated from each other |
| Sync & backup | Incremental sync, full backup, LAN transfer; desktop also has Git version control |

:::note[The file knowledge base isn’t finished yet]
The file knowledge base mentioned on the website (PDF, DOC, and other local documents) is still in development. For the current release, stick to diaries and memories.
:::

## How is it different from Notion or Obsidian?

Note-taking tools solve “keep my material tidy.” BaiShou wants to solve “the AI actually remembers me.”

| | Note-taking tools | BaiShou |
|--|-------------------|---------|
| Focus | Organizing, backlinks, writing | Personal memory that AI understands and uses over the long term |
| AI | Usually a plugin or a bolted-on chat box | Companions, memory rings, and RAG are the skeleton of the product |
| Data | Often tied to an official cloud or plugin ecosystem | Local by default, with optional sync to your own S3 / WebDAV |

## What we insist on

1. **Local-first**: Core data lives on your device, and you can export it and walk away at any time.
2. **Core capabilities stay open**: Diary, self-hosted sync, and custom model APIs have no paywall.
3. **Let the AI actually read your material**: It can search, answer questions, and summarize — it isn’t just a cloud drive.
4. **Official services are only an option**: Use them if you want convenience; everything still works fully without paying.
