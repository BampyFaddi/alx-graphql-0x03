self.__BUILD_MANIFEST = {
  "/_error": [
    "./static/chunks/pages/_error.js"
  ],
  "/sentry-example-page": [
    "./static/chunks/pages/sentry-example-page.js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "has": [
          {
            "type": "query",
            "key": "o",
            "value": "(?<orgid>\\d*)"
          },
          {
            "type": "query",
            "key": "p",
            "value": "(?<projectid>\\d*)"
          },
          {
            "type": "query",
            "key": "r",
            "value": "(?<region>[a-z]{2})"
          }
        ],
        "source": "/monitoring(/?)"
      },
      {
        "has": [
          {
            "type": "query",
            "key": "o",
            "value": "(?<orgid>\\d*)"
          },
          {
            "type": "query",
            "key": "p",
            "value": "(?<projectid>\\d*)"
          }
        ],
        "source": "/monitoring(/?)"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/api/sentry-example-api",
    "/sentry-example-page"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()