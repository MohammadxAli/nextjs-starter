# Next.js TypeScript starter

This is a _Next.js_ and _TypeScript_ starter with sane defaults. There's a support for [Tailwindcss](https://github.com/tailwindlabs/tailwindcss), [Bootstrap](https://github.com/twbs/bootstrap), [MUI](https://github.com/mui/material-ui) outside the box. There's also a support for internationalization and localization using react-intl and react-i18next (with next-i18next). It support rtl/ltr as well.  
A mock server using [json-server](https://github.com/typicode/json-server) is also available, more info about mock server can be found at the end of readme.

## Getting started

To run the project you need to do the following:

1. Start by running the `npm install` command to install all the dependencies.
2. Duplicate or rename `.env.local.example` to `.env.local` and update the environment variables.  
   The variable values are defined as:

| Variable                          | Description                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_DEFAULT_LOCALE`      | Required value\*, must be a two character string defining the default locale                                           |
| `NEXT_PUBLIC_BASE_SERVER_API_URL` | The url of main API server, this can be same as mock server, in the early phase when main API server is not ready yet. |
| `NEXT_PUBLIC_MOCK_SERVER_API_URL` | The url of mock API server, used to mock data.                                                                         |
| `NEXT_PUBLIC_FAKER_TYPE`          | Possible values are: `yes` \| `no` \| `mixed`.                                                                         |

**Notes on `NEXT_PUBLIC_FAKER_TYPE`**:

-   If the value is `yes` then the project will be populated with mock data, which `NEXT_PUBLIC_MOCK_SERVER_API_URL` is used as the base url for all the routes.
-   If the value is `mixed` then the project will be populated with mixed data (mock and real combined), this can be useful when you are developing and also don't want your pages to crash, if they are already using mock data behind the scene for some of the API routes.
-   If the value is `no` then the project will be populated will all the real data, this should be the default when you are doing production builds.

3. Run `npm run dev` to run the development server or `npm run build` to build the project for deploying.

## Mock Server

By using a mock server we can separate the development of front-end and the back-end.

The mock server is built on top of [`json-server`](https://github.com/typicode/json-server)
Each route supports all of the methods such as `GET`, `POST`, `PATCH` and `DELETE`.  
Filtering the results is available by using the [`json-server`](https://github.com/typicode/json-server) methods with query parameters.

## Todo List

Any tasks related to project will be listed here.
