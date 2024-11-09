# SEEK Featured Ad Remover

A userscript that automatically removes "Featured" job advertisements on the SEEK job listings website, providing a cleaner, more relevant job search experience. This script works on both the New Zealand (`seek.co.nz`) and Australian (`seek.com.au`) SEEK domains.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
  - [Using Violetmonkey (Recommended)](#using-violetmonkey-recommended)
- [Usage](#usage)
- [Compatibility](#compatibility)
- [Contributing](#contributing)

---

## Overview

When browsing job listings on SEEK, some jobs are marked as "Featured" to boost visibility, cluttering the job search experience for others. This script identifies and removes these "Featured" listings from SEEK’s search results, displaying only organic job posts.

## Features

- **Removes "Featured" Ads**: Hides all job ads marked as "Featured" on SEEK.
- **Support for Dynamic Content**: Continually checks for and removes new "Featured" ads that load dynamically as you scroll.
- **Works on NZ and AU Domains**: Supports both `seek.com.au` (Australia) and `seek.co.nz` (New Zealand).

## Installation

### Using Violetmonkey (Recommended)

1. **Install Violetmonkey**:
   - [Violetmonkey for Chrome](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag)
   - [Violetmonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
   - [Violetmonkey for Edge](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao)
   - [GitHub Releases](https://github.com/violentmonkey/violentmonkey/releases)

2. **Add the Userscript**:
   - Open Violetmonkey and click on the "+", select "New".
   - Copy the script code from [seek-featured-ad-remover](https://github.com/your-repo/seek-featured-ad-remover) and paste it into the editor.
   - Save the script.

3. **Navigate to SEEK**:
   - Go to [seek.com.au](https://www.seek.com.au) or [seek.co.nz](https://www.seek.co.nz), and the script will automatically hide "Featured" job listings.

## Usage

Once installed, the script runs automatically each time you visit a SEEK job listings page. It continuously monitors the page and removes any "Featured" ads, even if they are loaded dynamically as you scroll.

## Compatibility

This userscript has been tested and is compatible with:

- **Chrome**
- **Firefox**
- **Edge**

Users need to install a userscript manager (Tampermonkey or Violentmonkey) for their respective browser for the script to run.

## Contributing

Contributions are welcome! Feel free to submit issues, fork the repository, and create pull requests.

1. Fork the repository
2. Clone your fork and make changes
3. Submit a pull request

---
