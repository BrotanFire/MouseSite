#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
}
$ret=0
if (Test-Path "./node$exe") {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "./node$exe"  "./node_modules/json-server/lib/cli/bin.js" $args
  } else {
    & "./node$exe"  "./node_modules/json-server/lib/cli/bin.js" $args
  }
  $ret=$LASTEXITCODE
} else {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "node$exe"  "./node_modules/json-server/lib/cli/bin.js" $args
  } else {
    & "node$exe"  "./node_modules/json-server/lib/cli/bin.js" $args
  }
  $ret=$LASTEXITCODE
}
exit $ret
