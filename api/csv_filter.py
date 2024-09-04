import csv

def filter_csv_by_names(names):

    with open('all_checks.csv', 'r', newline='',encoding='utf-8') as infile, open('checks.csv', 'w', newline='',encoding='utf-8') as outfile:
        reader = csv.DictReader(infile)
        writer = csv.DictWriter(outfile, fieldnames=reader.fieldnames)
        writer.writeheader()

        for row in reader:
            if row['Name'] in names:
                writer.writerow(row)

if __name__ == '__main__':
    input_csv = 'checks.csv'
    names = ['Enforce password history', 'Allow log on locally']  # Replace with your list of names
    output_csv = 'filtered_checks.csv'

    filter_csv_by_names(names)