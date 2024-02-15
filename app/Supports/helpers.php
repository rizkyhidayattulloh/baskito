<?php

if (! function_exists('auth_user')) {
    /**
     * Get user model from auth.
     *
     * @return \App\Modules\User\Models\User
     *
     * @throws \Illuminate\Auth\AuthenticationException
     */
    function auth_user()
    {
        $user = auth()->user();

        if (! $user instanceof \App\Modules\User\Models\User) {
            throw new \Illuminate\Auth\AuthenticationException();
        }

        return $user;
    }
}
