import os

folder_path = r'<FILE_PATH>'
file_extension = '.jpg'
start_number = 1
# Get the list of files in the folder
file_list = os.listdir(folder_path)

# Rename files in the folder
for i, filename in enumerate(file_list):
    # Create the new filename with the desired format
    new_filename = str(i + start_number) + file_extension
    
    # Construct the full paths for the old and new filenames
    old_filepath = os.path.join(folder_path, filename)
    new_filepath = os.path.join(folder_path, new_filename)
    
    # Rename the file
    os.rename(old_filepath, new_filepath)

print("File renaming complete.")
