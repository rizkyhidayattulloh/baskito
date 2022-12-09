declare module "@inertiajs/inertia" {
    interface PageProps {
        flash: FlashMessage,
    }
}

export type FlashMessage = {
    message: null | string,
}
