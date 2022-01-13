export default {
  app: {
    login: 'Login',
    logout: 'Logout',
    home: 'Home',
    admin: 'Admin',
    username: 'Username',
    groups: 'Groups',
    file: 'File',
    folder: 'Folder',
    mount_at: 'Mount At: {n}',
    empty_list: 'Nothing here',
    go_back: 'Go back',
    root_path: 'Root',
    toggle_to_list: 'Toggle to list mode (T)',
    toggle_to_thumbnail: 'Toggle to thumbnail mode (T)',
    toggle_sort: 'Toggle sort mode',
    sort: {
      name_asc: 'Name Asc',
      name_desc: 'Name Desc',
      mod_time_asc: 'Modified Asc',
      mod_time_desc: 'Modified Desc',
      size_asc: 'Size Asc',
      size_desc: 'Size Desc',
    },
    search: {
      placeholder: 'Search Files...',
      searching: 'Searching...',
      search_help: 'Try:',
      no_result: 'No result',
    },
    task_status_pending: 'Pending',
    task_status_running: 'Running',
    task_status_done: 'Done',
    task_status_error: 'Error',
    task_status_canceled: 'Canceled',
  },
  error: {
    not_allowed: 'Operation not allowed',
    not_found: 'Resource not found',
    server_error: 'Server Error',
  },
  form: {
    required_msg: '{f} is required',
  },
  routes: {
    title: {
      site: 'Site',
      users: 'Users',
      groups: 'Groups',
      drives: 'Drives',
      misc: 'Misc',
    },
  },
  md: {
    error: 'An error occurred while rendering markdown',
  },
  dialog: {
    base: {
      ok: 'OK',
    },
    open: {
      max_items: 'Select at most {n} items.',
      n_selected: '{n} items selected.',
      clear: 'clear',
    },
    text: {
      yes: 'Yes',
      no: 'No',
    },
    loading: {
      cancel: 'Cancel',
    },
  },
  p: {
    admin: {
      oauth_connected: 'Already connected to {p}',
      t_site: 'Site',
      t_users: 'Users',
      t_groups: 'Groups',
      t_drives: 'Drives',
      t_misc: 'Misc',
      site: {
        app_name: 'Site Title',
        save: 'Save',
      },
      drive: {
        reload_drives: 'Reload drives',
        reload_tip: 'Reload drives to take effect',
        name: 'Name',
        type: 'Type',
        operation: 'Operation',
        edit: 'Edit',
        delete: 'Delete',
        add_drive: 'Add drive',
        edit_drive: 'Edit drive: {n}',
        save: 'Save',
        start_configure: 'Configure',
        cancel: 'Cancel',
        configure: 'Configure',
        configured: 'Configured',
        not_configured: 'Not configured',
        add: 'Add',
        or_edit: ' or edit drive',
        f_name: 'Name',
        f_enabled: 'Enabled',
        f_type: 'Type',
        delete_drive: 'Delete drive',
        confirm_delete: 'Are you sure to delete drive {n}?',
        reload_tips: 'You need to reload drives to take effect',
      },
      user: {
        username: 'Username',
        operation: 'Operation',
        add_user: 'Add user',
        edit: 'Edit',
        delete: 'Delete',
        edit_user: 'Edit user {n}',
        groups: 'Groups',
        save: 'Save',
        cancel: 'Cancel',
        add: 'Add',
        or_edit: ' or edit user',
        f_username: 'Username',
        f_password: 'Password',
        delete_user: 'Delete user',
        confirm_delete: 'Are you sure to delete user {n}?',
      },
      group: {
        name: 'Name',
        operation: 'Operation',
        add_group: 'Add group',
        edit: 'Edit',
        delete: 'Delete',
        edit_group: 'Edit group {n}',
        users: 'Users',
        save: 'Save',
        cancel: 'Cancel',
        add: 'Add',
        or_edit: ' or edit group',
        f_name: 'Name',
        delete_group: 'Delete group',
        confirm_delete: 'Are you sure to delete group {n}?',
      },
      misc: {
        permission_of_root: 'Permission of root',
        save: 'Save',
        clean: 'Clean',
        clean_invalid: 'Clean Invalid Permissions and Mounts',
        clean_cache: 'Clean Cache',
        statistics: 'Statistics',
        refresh_in: 'Refresh in {n}s',
        invalid_path_cleaned: '{n} invalid paths cleaned',
        search_index: 'Files Index',
        search_disabled: 'Search is not enabled',
        search_form_filter: 'Filters',
        search_form_filter_desc:
          'Filters line by line, line starts with + for including, line starts with - for excluding. Or leave blank to include all files.\n** matches zero or more directories;\n* matches any sequence of non-path-separators;\n? matches any single non-path-separator character.',
        search_form_filter_placeholder:
          '-**/node_modules/**\n+**/*.jpg\n+**/*.png',
        search_form_filter_invalid: 'Invalid filters',
        search_form_path: 'Path',
        search_form_path_desc: 'Leave blank to index all files',
        search_submit_index: 'Index now',
        search_th_path: 'Path',
        search_th_status: 'Status',
        search_th_created_at: 'Started At',
        search_th_updated_at: 'Updated At',
        search_th_ops: 'Operations',
        search_index_stop: 'Stop',
        search_op_index: 'Index',
        search_op_delete: 'Delete',
      },
      p_edit: {
        subject: 'Subject',
        rw: '(R/W)',
        policy: 'Policy',
        any: 'ANY',
        reject: 'Reject',
        accept: 'Accept',
      },
    },
    task: {
      empty: 'Nothing here',
      start: 'Start',
      pause: 'Pause',
      stop: 'Stop',
      remove: 'Remove',

      s_created: 'Created',
      s_starting: 'Starting',
      s_paused: 'Paused',
      s_stopped: 'Stopped',
      s_error: 'Error',
      s_completed: 'Completed',
    },
    home: {
      file_exists: "'{n}' already exists, override or skip?",
      apply_all: 'Apply for all',
      readme_loading: 'Loading README...',
      readme_failed: 'Failed to load README.',
      unsaved_confirm: 'You have some unsaved changes, are you sure to leave?',
    },
    new_entry: {
      new_item: 'New item',
      create_file: 'Create empty file',
      upload_file: 'Upload file',
      create_folder: 'Create folder',
      upload_tasks: 'Upload Tasks',
      tasks_status: 'Tasks {p}',
      drop_tip: 'Drop files here to upload',
      invalid_filename: 'Invalid filename',
      invalid_folder_name: 'Invalid folder name',
      confirm_stop_task: 'Stop this task?',
      confirm_remove_task: 'Remove this task, cannot be undone?',
      file_exists: 'File exists',
      skip: 'Skip',
      override: 'Override',
    },
    login: {
      username: 'Username',
      password: 'Password',
      login: 'Login',
    },
  },
  hv: {
    download: {
      download: 'Download',
      downloads: 'Download {n} files',
    },
    permission: {
      save: 'Save',
    },
    text_edit: {
      save: 'Save',
    },
  },
  handler: {
    copy_move: {
      copy: 'Copy',
      move: 'Move',
      copy_to: 'Copy to',
      move_to: 'Move to',
      copy_desc: 'Copy files',
      move_desc: 'Move files',
      copying: 'Copying {n} {p}',
      moving: 'Moving {n} {p}',
      copy_open_title: 'Select copy to',
      move_open_title: 'Select move to',
      override_or_skip: 'Override or skip for duplicates?',
      override: 'Override',
      skip: 'Skip',
    },
    delete: {
      name: 'Delete',
      desc: 'Delete files',
      confirm_n: 'Delete these {n} files?',
      confirm: 'Delete this file?',
      deleting: 'Deleting {n} {p}',
    },
    download: {
      name: 'Download',
      desc: 'Download file',
    },
    image: {
      name: 'Gallery',
      desc: 'View images',
    },
    pdf: {
      name: 'View',
      desc: 'View PDF',
    },
    media: {
      name: 'Play',
      desc: 'Play media',
    },
    mount: {
      name: 'Mount to',
      desc: 'Mount entries to another location',
      open_title: 'Select mount to',
    },
    permission: {
      name: 'Permissions',
      desc: 'Set permissions for this item',
    },
    rename: {
      name: 'Rename',
      desc: 'Rename this file',
      input_title: 'Rename',
      invalid_filename: 'Invalid filename',
    },
    text_edit: {
      edit_name: 'Edit',
      view_name: 'View',
      edit_desc: 'Edit this file',
      view_desc: 'View this file',
    },
  },
}
