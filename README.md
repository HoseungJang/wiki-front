# wiki-frontend

## Overview
[https://github.com/HoseungJang/wiki](https://github.com/HoseungJang/wiki)의 내용을 Github API로 가져와서 보여주는 개인 위키 웹입니다.

## Skills summary
- [create-react-app](https://github.com/facebook/create-react-app)의 Typescript 템플릿으로 만들어졌습니다.

- Github API는 [Octokit](https://github.com/octokit)의 REST API client를 통해 사용합니다.

  - [swr](https://github.com/vercel/swr)을 함께 사용합니다.

  - [js-base64](https://github.com/dankogai/js-base64)로 Github API의 응답을 디코딩합니다.

- [react-markdown](https://github.com/remarkjs/react-markdown)으로 마크다운을 파싱해서 시각화합니다.
