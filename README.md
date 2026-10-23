# ekCoreELEC

EspaKodi para TV box y placas Amlogic. Por dentro es CoreELEC 21.3 con Kodi 21.3, ya configurado en español y con los addons y favoritos de EspaKodi listos desde el primer arranque.

Está pensado para arrancar desde una tarjeta microSD. En un TV box no se borra Android: con la tarjeta puesta arranca EspaKodi, y si la quitas, el aparato vuelve a arrancar con Android como siempre.

Las imágenes se descargan desde [Releases](https://github.com/espakodi/ekCoreELEC/releases). La versión para PC y Raspberry Pi está en [ekLibreELEC](https://github.com/espakodi/ekLibreELEC).

## Versiones

- [v0.0.1](https://github.com/espakodi/ekCoreELEC/releases/tag/v0.0.1), del 23 de octubre de 2026. Es la actual.

El nombre de cada archivo lleva el tipo (`-ng` o `-ne`), la versión de Kodi (21.3 Omega), la fecha en que se construyó y, al final, el aparato para el que es.

## Qué archivo descargar

### Primero, el chip

Mira qué chip lleva tu aparato. Viene en la caja, en la web donde lo compraste o en cualquier aplicación de Android que muestre las características del aparato.

| Tipo | Chips |
|---|---|
| `-ng` | S905X, S905D, S905W, S905X2, S905Y2, S922X, A311D, S905X3, S905D3 y S905X4 |
| `-ne` | S905X4, S905W2, S905Y4, S928X y A311D2 |

El S905X4 está en las dos. Prueba primero la `-ne`, que es la más nueva, y si no arranca, la `-ng`.

Si tu chip no aparece en ninguna (por ejemplo, un S912 o un S905 a secas), estas imágenes no te sirven.

### Después, el aparato

Para un TV box se usa la imagen Generic del tipo que te toque. Es la que necesita la mayoría de la gente, y lleva un paso más que las otras, el del `dtb.img`, que se explica más abajo.

| TV box | Descarga |
|---|---|
| Chips de la lista `-ng` | [EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Generic.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Generic.img.gz) |
| Chips de la lista `-ne` | [EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856-Generic.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856-Generic.img.gz) |

Si tienes una de estas placas, coge la suya. Ya viene preparada y no necesita el paso del `dtb.img`. La de una placa no vale para otra.

| Placa | Descarga |
|---|---|
| Hardkernel Odroid C4 | [EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_C4.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_C4.img.gz) |
| Hardkernel Odroid HC4 | [EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_HC4.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_HC4.img.gz) |
| Hardkernel Odroid N2 | [EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_N2.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_N2.img.gz) |
| Hardkernel Odroid N2L | [EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_N2L.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Odroid_N2L.img.gz) |
| Khadas VIM1S | [EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856-Khadas_VIM1S.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856-Khadas_VIM1S.img.gz) |
| Khadas VIM4 | [EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856-Khadas_VIM4.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856-Khadas_VIM4.img.gz) |
| Libre Computer La Frite | [EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-LaFrite.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-LaFrite.img.gz) |
| Libre Computer Le Potato | [EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-LePotato.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-LePotato.img.gz) |
| Radxa Zero | [EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Radxa_Zero.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Radxa_Zero.img.gz) |
| Radxa Zero 2 | [EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Radxa_Zero2.img.gz](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200-Radxa_Zero2.img.gz) |

En Releases también hay dos archivos `.tar`. Esos no sirven para instalar; son para actualizar un aparato que ya tiene EspaKodi (ver [Actualizaciones](#actualizaciones)).

## Cómo se instala

### 1. Comprobar que la descarga está entera

Conviene hacerlo antes de grabar, porque una descarga a medias se graba sin dar ningún error y luego no arranca. Cada imagen tiene al lado, en Releases, un archivo `.sha256` con su huella. Descarga los dos y ponlos en la misma carpeta.

En Windows, abre PowerShell en esa carpeta y escribe:

```
Get-FileHash -Algorithm SHA256 nombre-de-la-imagen.img.gz
```

Abre el `.sha256` con el Bloc de notas. El número largo del principio tiene que ser igual que el que sale en PowerShell, da igual que esté en mayúsculas o en minúsculas.

En Linux o en macOS:

```
sha256sum -c nombre-de-la-imagen.img.gz.sha256        # Linux
shasum -a 256 -c nombre-de-la-imagen.img.gz.sha256    # macOS
```

Tiene que responder OK.

### 2. Grabar la tarjeta

Necesitas una microSD de 8 GB o más y uno de estos dos programas, que abren el `.img.gz` tal cual, sin descomprimirlo:

- [balenaEtcher](https://etcher.balena.io/)
- [Raspberry Pi Imager](https://www.raspberrypi.com/software/). En «Sistema operativo» elige «Usar personalizada» y busca el archivo.

Al grabar se borra todo lo que hubiera en la tarjeta.

Cuando termine, puede que Windows diga que no puede leer una unidad y te ofrezca formatearla. Dile que no. Es normal, porque esa parte de la tarjeta está en un formato de Linux que Windows no sabe leer.

### 3. El dtb.img, solo con la imagen Generic

Las imágenes de placa no necesitan este paso; ya traen el suyo.

Saca la tarjeta y vuelve a meterla en el ordenador. Aparecerá una unidad llamada COREELEC con una carpeta `device_trees`. Busca ahí el archivo de tu aparato, cópialo a la raíz de la tarjeta (al lado de `kernel.img`) y cámbiale el nombre a `dtb.img`.

El nombre de cada archivo dice para qué aparato es:

| Parte del nombre | Qué indica |
|---|---|
| `sm1_s905x3_...` | el chip |
| `..._2g...`, `..._4g...` | 2 GB o 4 GB de RAM |
| `..._1gbit` | tiene red por cable de 1 Gbit |
| `beelink`, `ugoos`, `minix`, `x96`, `buzztv`... | un modelo concreto; si es el tuyo, coge ese |

Por ejemplo, para un S905X3 con 4 GB y red de 1 Gbit sería `sm1_s905x3_4g_1gbit.dtb`, y para un S905X4 con 2 GB, `sc2_s905x4_2g.dtb`.

Los de S905X, S905D y S905W empiezan por `gxl_` y no llevan el nombre del chip. Si el tuyo es de esos y no sabes cuál coger, prueba `gxl_p212_2g.dtb`, o `gxl_p212_1g.dtb` si tiene 1 GB.

Si eliges mal, lo normal es que no arranque o que no funcione la red. No se estropea nada. Vuelve a meter la tarjeta en el ordenador y prueba con otro.

### 4. Arrancar

En un TV box, con la imagen Generic:

1. Con el aparato desenchufado, mete la tarjeta.
2. Busca el botón de reinicio, que en muchos modelos pone reset. Suele estar escondido dentro del agujero del conector AV y se pulsa con un palillo.
3. Mantenlo pulsado, enchufa la corriente y suéltalo cuando aparezca el logotipo de EspaKodi, a los pocos segundos.

Si tu modelo no tiene ese botón, busca cómo se arranca desde tarjeta en el tuyo. A partir de esa primera vez, lo normal es que arranque EspaKodi siempre que la tarjeta esté puesta, y Android cuando no lo esté.

En una placa, mete la tarjeta y enciéndela. Si arranca con su sistema de siempre, mira en su manual cómo elegir el arranque desde tarjeta.

## El primer arranque

Tarda un poco más que los siguientes, porque prepara la tarjeta y copia los addons. No lo desenchufes mientras tanto. Después aparece EspaKodi en español. Si sale un asistente de bienvenida para la red y la hora, pulsa Siguiente hasta el final.

## Instalar en la memoria interna

EspaKodi se puede pasar a la memoria interna de un TV box, pero eso borra Android y no está probado. No lo hagas si no sabes cómo volver atrás. Desde la tarjeta funciona igual.

## Seguridad

El SSH y el servidor web de Kodi vienen apagados. Se encienden en Ajustes > EspaKodi > Servicios. Si enciendes el SSH, el usuario es `root` y la contraseña de fábrica es `espakodi`. Cámbiala la primera vez que entres, con la orden `passwd`.

## Actualizaciones

EspaKodi no se actualiza solo.

Para pasar a una versión nueva sin volver a grabar la tarjeta, copia el `.tar` de esa versión en la carpeta Update del aparato y reinícialo. Tus ajustes y tus addons se conservan.

| Tipo | Archivo de actualización |
|---|---|
| `-ng` | [EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200.tar](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ng.arm-21.3-Omega_devel_20260915183200.tar) |
| `-ne` | [EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856.tar](https://github.com/espakodi/ekCoreELEC/releases/download/v0.0.1/EspaKodi-Amlogic-ne.aarch64-21.3-Omega_devel_20260915194856.tar) |

El `.tar` tiene que ser del mismo tipo que tu imagen: el `-ng` para los aparatos de la lista `-ng` y el `-ne` para los de la lista `-ne`.

Desde Windows se llega a la carpeta Update escribiendo `\\IP-del-aparato\Update` en la barra del explorador. Para que aparezca, el aparato tiene que tener Samba encendido en Ajustes > EspaKodi > Servicios.

No instales encima actualizaciones del CoreELEC oficial, porque quitarían EspaKodi.

## Ayuda

Si tienes algún problema, abre una consulta en [Issues](https://github.com/espakodi/ekCoreELEC/issues). En los foros de CoreELEC o de Kodi no conocen esta versión y no te van a poder ayudar.

La opción de enviar el registro, dentro de Ajustes, sube tu registro a un servidor externo. No la uses salvo que vayas a mandárselo al soporte de EspaKodi.

## Aviso legal

EspaKodi es una modificación no oficial de Kodi, el reproductor de la Fundación XBMC, montada sobre CoreELEC. No está desarrollada, afiliada, autorizada ni respaldada por la Fundación XBMC, ni por el equipo de Kodi, ni por el de CoreELEC. Kodi y CoreELEC son software libre con licencia GPL, y sus licencias van incluidas dentro de cada imagen.
