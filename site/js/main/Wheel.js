_container
  .addEventListener(
    'wheel', (e) =>
    {
      if (
        document.body.contains(
          _channel
        ) &&
        display == `sideScroll`
      )
        _channel.scrollLeft += e.deltaY / 4;
    }
  )
