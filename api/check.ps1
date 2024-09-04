# Load the configuration from CSV
$configPath = "checks.csv"
$checks = Import-Csv -Path $configPath

# Function to perform a single check
function Perform-Check {
    param (
        [string]$RegistryPath,
        [string]$ValueName,
        [string]$ExpectedValue
    )

    try {
        $value = Get-ItemProperty -Path $RegistryPath -Name $ValueName -ErrorAction Stop
        return ($value.$ValueName -eq $ExpectedValue)
    } catch {
        return $false
    }
}

# Get the PC name from the system
$pcName = [System.Environment]::MachineName

# Initialize results collection
$results = @()

# Perform all checks and collect results
foreach ($check in $checks) {
    $checkResult = Perform-Check -RegistryPath $check.RegistryPath -ValueName $check.ValueName -ExpectedValue $check.ExpectedValue
    $results += [PSCustomObject]@{
        Name = $check.Name
        Result = $checkResult
    }
}

# Prepare the output
$output = [PSCustomObject]@{
    PCName = $pcName
    Checks = $results
}

# Generate the filename with a timestamp
$timestamp = (Get-Date).ToString("dd-MM-yyyy_HH-mm-ss")
$filename = "output_$timestamp.json"

# Convert to JSON and save to file
# $output | ConvertTo-Json -Depth 4 | Out-File -FilePath $filename
$output | ConvertTo-Json | Write-Output

# Write-Output "Results saved to $filename"
