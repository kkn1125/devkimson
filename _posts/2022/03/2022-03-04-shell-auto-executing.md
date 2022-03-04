---
layout: post
date:   2022-03-04 19:56:07 +0900
title:  "[SHELL] Shell Script로 파일 변환을 감지해보자"
author: Kimson
categories: [ SHELL, TIL ]
image: assets/images/post/covers/TIL-shell.png
tags: [ bash, shell, sh ]
description: "파일 변환 감지

파이썬을 사용하면서 불편했던 점이 실행할 때마다 입력하는게 번거롭기도 하고 live-server의 저장시 새로고침 되는 기능을 만들 수 있을까 싶었습니다.

여러 커뮤니티를 찾다가 그 내용이 역시 갓오버플로우에 있었습니다."
featured: true
hidden: false
rating: 4.5
toc: true
profile: false
istop: true
keysum: false
keywords: ""
published: true
---

# 파일 변환 감지

파이썬을 사용하면서 불편했던 점이 실행할 때마다 입력하는게 번거롭기도 하고 live-server의 저장시 새로고침 되는 기능을 만들 수 있을까 싶었습니다.

여러 커뮤니티를 찾다가 그 내용이 역시 갓오버플로우에 있었습니다. 👏

## sh파일 만들기

```sh
LEDIT=$(stat -c %Z /path/filename.extension)
while true
do
  CEDIT=$(stat -c %Z /path/filename.extension)
  if [[ "$CEDIT" != "$LEDIT" ]]; then
      echo "===== RUN PYTHON COMMNAD ====="
      python test01.py
      LEDIT=$CEDIT
  fi
  sleep 0.5
done
```

### stat 명령어

`stat`명령어는 파일이나 파일 시스템 상태를 표시하는 명령어 입니다. 뒤에 따르는 옵션을 하나하나 알아봅시다.

`-c`는 포맷을 사용할 때마다 개행 출력을 해줍니다. 그리고 그 뒤에 따르는 `%Z`는 해당 경로 파일의 마지막 상태변경 시간을 초단위로 나타냅니다.

즉, 전체 구문을 보면 `LEDIT`에 해당 파일의 마지막 변경 시간이 담기게 되고, `while`문을 돌면서 `CEDIT`변수에 `sleep`을 걸어 `0.5`초 간격으로 잠자게 합니다. 그냥 `0.5`초 딜레이 주고 `while`문 돌리는 겁니다.

그러면 `if`문에서 `CEDIT`과 `LEDIT`이 다르다면 `python test01.py`를 `command`로 `execute`합니다.

`if`문 나오기 전에 `LEDIT`을 `CEDIT`으로 초기화 해줍니다.

파이썬이나 c언어를 컴파일하고 실행하는데 계속 명령줄에 입력하기가 번거로웠는데 만들어 두고 사용하면 참 편리합니다. 😁👍

> stat의 옵션 정보는 stat --help에 잘 나와 있습니다. 😮

-----

📚 함께 보면 좋은 내용

[hashnode :: Creating your own scripting language? Where should one start?](https://hashnode.com/post/creating-your-own-scripting-language-where-should-one-start-ciudleyz70jksvy532q1y4uk7){:target="_blank"}