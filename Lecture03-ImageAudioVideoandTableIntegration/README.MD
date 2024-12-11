# Lecture 03 - Image, Audio/Video, and Table Integration

In the previous lecture, we covered the basics of images. In this lecture, we will explore additional attributes such as `width` and `height`, and we will also cover concepts related to **audio**, **video**, and **table integration** in HTML.

## Width and Height

In HTML, the `height` and `width` attributes are used to define the dimensions of an element. These values can be specified in pixels. For images, you can set the height and width using the `<img>` tag's `height` and `width` attributes:

```html
<img src="image.jpg" height="200" width="300" alt="Description">
```

## Audio

The HTML `<audio>` tag is used to embed audio files, such as audio clips, in a webpage. HTML5 supports three main audio file formats:

- **MP3**
- **WAV**
- **OGG**

The `<audio>` tag includes controls for play, pause, and volume, and can be used with the following attributes:

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

## Video

HTML5 also supports the `<video>` tag, which is used to embed video files on a webpage. The supported video formats are:

- **MP4 (H.264)**
- **WebM (VP8/VP9)**
- **Ogg (Theora)**

Example usage of the `<video>` tag:

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

## Table Integration

The HTML `<table>` tag is used to create tables to display data in a tabular format (rows and columns). You can define a table using the following elements:

- `<table>`: Defines the table
- `<tr>`: Defines a table row
- `<th>`: Defines a table header cell
- `<td>`: Defines a table data cell

### Syntax:

```html
<table>
  <thead>
    <tr>
      <th>Column #1</th>
      <th>Column #2</th>
      <th>Column #3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data (Column #1)</td>
      <td>Data (Column #2)</td>
      <td>Data (Column #3)</td>
    </tr>
  </tbody>
</table>
```

You can also use CSS to add borders to your tables for better visual presentation.

## Summary

In today's lecture, we covered the following HTML concepts:
- **Image** attributes (`width`, `height`)
- **Audio** embedding and supported formats
- **Video** embedding and supported formats
- **Table** creation and structure

Feel free to refer back to these examples as you continue to work with HTML.