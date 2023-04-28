<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="js/styles.css">

        <title>Laravel+Angular</title>

    </head>
    <body>
        <app-root></app-root>
        <script src="{{ asset('js/runtime.js') }}" type="module"></script>
        <script src="{{ asset('js/polyfills.js') }}" type="module"></script>
        <script src="{{ asset('js/main.js') }}" type="module"></script>
    </body>
</html>
