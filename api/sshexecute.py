from fabric import Connection
import json
from datetime import datetime
from csv_filter import filter_csv_by_names

windows_ip = "192.168.128.12"
username = "SSHuser"
password = "pass123"
test_names = ["Enforce password history", "Maximum password age", "Minimum password age", "Load and unload device drivers"]

# remote_ps1_script = 'check.ps1'

local_csv = 'checks.csv'
# remote_csv = 'checks.csv'

def run_test(username,password,ip,check_csv):

    ps1_script = 'check.ps1'
    # Establish an SSH connection to the Windows machine
    conn = Connection(
        host=ip,
        user=username,
        connect_kwargs={
            "password": password,
        },
    )

    # filter_csv_by_names(names)

    conn.put(ps1_script, remote=ps1_script)
    conn.put(check_csv, remote=check_csv)
    result = conn.run(f'powershell -ExecutionPolicy Bypass -File {ps1_script}', hide=True)

    # Output the result
    print("Command executed with result:")
    print(result.stdout)
    # str_output = result.stdout.replace("\r\n", "")
    # output = json.loads(str_output)

    current_timestamp = datetime.now()
    formatted_timestamp = current_timestamp.strftime("%Y-%m-%d-%H-%M-%S")
    file_path = 'output/{}.json'.format(formatted_timestamp)
    conn.get('output.json', file_path)



    # with open(file_path, 'w') as file:
    #     # Use json.dump() to write the data to the file
    #     json.dump(output, file, indent=4)

run_test(username,password,windows_ip,local_csv)