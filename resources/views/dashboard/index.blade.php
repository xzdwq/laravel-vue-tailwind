<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{csrf_token()}}">
  <script>window.Laravel = { csrfToken: '{{csrf_token()}}' }</script>
  <title>xzdwq.dashboard</title>
  <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body>
  <div id="dashboard"></div>

  <script src="{{asset('js/dashboard.js')}}"></script>
</body>

</html>