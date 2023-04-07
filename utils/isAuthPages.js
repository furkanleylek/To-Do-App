const AUTH_PAGES = ['/landing']

const isAuthPages = (url) => {
    return AUTH_PAGES.includes(url);
}

export default isAuthPages