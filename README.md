# QSO Dashboard

This is a _very_ basic live dashboard for QSO's logged by N3FJP's contest
logging software.  The idea is that given a shared log file, this tool will
display some automatically updated stats for clubs doing contests, field days,
etc.

## Requirements

* N3FJP's logging software, with the logbook file accessible by this tool.
* PHP 8.2+ (older versions may work, I only tested on 8.2 and newer).

## Running

Set up a basic webserver (beyond the scope of this README), and edit
`controller.php` to match your needs.  You'll need to point it to the log file
output by N3FJP.  Point your webserver to the `public` directory and it should
_just work_.  You don't need any dependencies, nor do you need to clone in the
submodule for things to function.

## Notes

This tool has no authentication and _should not_ be exposed to the public
internet.  The idea is this script will be used in a private network and local
webserver.

I won't say running this on a public server won't work, I'm just saying this was
written quickly and shouldn't be trusted on public web servers.