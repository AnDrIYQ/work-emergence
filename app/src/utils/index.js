export function copyToClipboard(text) {
    return new Promise((resolve) => {
        navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
            if (result.state === "granted" || result.state === "prompt") {
                navigator.clipboard.writeText(text).then((result) => {
                    resolve(result);
                });
            }
        });
    });
}

export default {};
