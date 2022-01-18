package main


import "net/http"
import "runtime"
import "os/exec"
import "time"
import "log"
import "os"

func main() {

    path, err := os.Getwd()

    if err != nil {

	log.Println(err)

    }

    fs := http.FileServer(http.Dir(path))

    http.Handle("/", http.StripPrefix("/", fs))

    go func() {

        <-time.After(300 * time.Millisecond)

        err := open("http://localhost:3000")

        if err != nil {

            log.Println(err)

        }

    }()

    http.ListenAndServe(":3000", nil)

// open opens the specified URL in the default browser of the user.

}

func open(url string) error {

    var cmd string

    var args []string



    switch runtime.GOOS {

    case "windows":

        cmd = "cmd"

        args = []string{"/c", "start"}

    case "darwin":

        cmd = "open"

    default: // "linux", "freebsd", "openbsd", "netbsd"

        cmd = "xdg-open"

    }

    args = append(args, url)

    return exec.Command(cmd, args...).Start()

}

