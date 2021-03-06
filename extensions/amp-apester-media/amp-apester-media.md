---
$category@: media
formats:
  - websites
teaser:
  text: Displays an [Apester](https://apester.com/) smart unit.
---

<!---
Copyright 2016 The AMP HTML Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

# amp-apester-media

## Examples

Single Mode:

```html
<amp-apester-media height="390" data-apester-media-id="#"> </amp-apester-media>
```

Playlist Mode:

```html
<amp-apester-media height="390" data-apester-channel-token="#">
</amp-apester-media>
```

## Attributes

<table>
  <tr>
    <td width="40%"><strong>data-apester-media-id</strong></td>
    <td>This attribute is required for single mode, and it represents the ID of the media (string value).</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-apester-channel-token</strong></td>
    <td>This attribute is required for playlist mode, and it represents the token of the channel (string value).</td>
  </tr>
</table>

## Validation

See [amp-apester-media rules](https://github.com/ampproject/amphtml/blob/master/extensions/amp-apester-media/validator-amp-apester-media.protoascii) in the AMP validator specification.
