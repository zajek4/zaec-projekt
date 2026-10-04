# ZAEC fonts

Tema koristi iste obitelji kao izvorni projekt: Space Grotesk i IBM Plex Mono.
Trenutačna implementacija ih enqueuea preko Google Fonts u `inc/assets.php` umjesto base64 inlineanja u svaku stranicu.

Za strogo self-hosted/GDPR deployment, ovdje postavite vlastite licencirane webfont datoteke i zamijenite remote enqueue lokalnim `@font-face` pravilima. Design tokeni `--font-d` i `--font-m` ne trebaju se mijenjati.
