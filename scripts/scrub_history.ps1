# Git History Scrubbing Script
$key = ""
$replacement = "YOUR_GEMINI_API_KEY_HERE"

Get-ChildItem -Recurse -File | ForEach-Object {
    try {
        $content = Get-Content -Raw $_.FullName -ErrorAction SilentlyContinue
        if ($content -and $content.Contains($key)) {
            $newContent = $content.Replace($key, $replacement)
            $newContent | Set-Content -Path $_.FullName -Encoding utf8 -NoNewline
            Write-Host "Scrubbed: $($_.FullName)"
        }
    }
    catch {
        # Skip files that can't be read (binaries etc)
    }
}
