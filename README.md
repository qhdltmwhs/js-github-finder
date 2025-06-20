# GitHub Finder

This project is a simple web application that allows you to search for GitHub users and see their profiles and repositories.

## Features

- Search for GitHub users by their username.
- View user profile information.
- View a user's latest public repositories.

## Configuration

This project can use the GitHub API with or without an API key. However, without an API key, the number of requests is very limited. It is highly recommended to use an API key.

## API 키 설정 방법

이 프로젝트는 GitHub API 키 없이도 사용할 수 있지만, 인증 없이 사용할 경우 1시간에 60회로 요청이 제한됩니다. 원활한 사용을 위해 본인만의 API 키를 등록하는 것을 권장합니다.

---

### GitHub OAuth App 키 발급 방법 (작성일 기준: 2025-06-20)

1. **GitHub에 로그인**한 후, 오른쪽 상단의 프로필 아이콘을 클릭하고 **Settings**(설정)으로 이동합니다.
2. 왼쪽 메뉴 하단에서 **Developer settings**(개발자 설정)을 클릭합니다.
3. **OAuth Apps**를 선택한 뒤, **New OAuth App**(새 OAuth 앱) 버튼을 클릭합니다.
4. 폼을 아래와 같이 채웁니다:
   - **Application name**: GitHub Finder (또는 원하는 다른 이름)
   - **Homepage URL**: http://127.0.0.1:5500/index.html (또는 본인의 로컬 서버 주소)
   - **Authorization callback URL**: http://127.0.0.1:5500 (또는 본인의 로컬 서버 주소)
5. **Register application**(앱 등록) 버튼을 클릭합니다.
6. 앱이 생성되면 **Client ID**와 **Client Secret**을 확인할 수 있습니다.

---

### API 키 파일 생성 및 작성 방법

1. 프로젝트의 `js/` 폴더 안에 `env.js` 파일을 만듭니다. (예: `js/env.js`)
2. 아래와 같이 내용을 작성합니다:

   ```javascript
   // 이 파일에 본인의 GitHub Client ID와 Secret을 입력하세요.
   const GITHUB_CLIENT_ID = 'YOUR_GITHUB_CLIENT_ID';
   const GITHUB_CLIENT_SECRET = 'YOUR_GITHUB_CLIENT_SECRET';
   ```

   - `YOUR_GITHUB_CLIENT_ID`와 `YOUR_GITHUB_CLIENT_SECRET` 부분을 본인의 값으로 바꿔주세요.
   - 이 파일은 이미 `.gitignore`에 포함되어 있으므로, 깃헙에 올라가지 않습니다.

3. 별도의 import 없이, 위와 같이 작성하면 앱이 자동으로 해당 상수를 인식하여 사용합니다.

