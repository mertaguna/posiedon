<link rel="stylesheet" type="text/css" href="{{ asset('css/chat.min.css') }}">
<script>
    var botmanWidget = {
        title: 'GarbaBot',
        introMessage: "Hello, type 'hi/hello' to start a chat<br><br>Halo, ketik 'hai/halo' untuk memulai percakapan",
        aboutText: '',
        bubbleBackground: '#2F3089',
        mainColor: '#2F3089',
        headerTextColor: '#fff',
        desktopHeight: 450,
        desktopWidth: 370,
        mobileHeight: "101vh",
        mobileWidth: "100%",
        bubbleAvatarUrl: "{{ asset('img/avatarr.png') }}",
    };
</script>
<script src="{{ asset('js/widget.js') }}"></script>