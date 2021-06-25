# SET GOPATH

## in supervisord set

[program:goserver]
command=/bin/bash -c "export GOPATH=path && $GOPATH/bin/server"
autostart=true
autorestart=true
redirect_stderr=true
