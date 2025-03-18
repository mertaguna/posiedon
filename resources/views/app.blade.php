<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Meta Tags -->
    <meta name="description" content="Garba Med adalah rumah sakit terpercaya yang menyediakan layanan kesehatan terbaik dengan fasilitas modern dan tenaga medis profesional.">
    <meta name="keywords" content="Garbamed, Garba med, rumah sakit, kesehatan, medis, layanan kesehatan, dokter, klinik">
    <meta name="author" content="Garba Med">
    <title inertia>{{ config('app.name', 'Garba') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
