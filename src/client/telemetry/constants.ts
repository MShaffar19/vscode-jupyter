// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

export enum EventName {
    COMPLETION = 'COMPLETION',
    COMPLETION_ADD_BRACKETS = 'COMPLETION.ADD_BRACKETS',
    DEFINITION = 'DEFINITION',
    HOVER_DEFINITION = 'HOVER_DEFINITION',
    REFERENCE = 'REFERENCE',
    SIGNATURE = 'SIGNATURE',
    SYMBOL = 'SYMBOL',
    FORMAT_SORT_IMPORTS = 'FORMAT.SORT_IMPORTS',
    FORMAT = 'FORMAT.FORMAT',
    FORMAT_ON_TYPE = 'FORMAT.FORMAT_ON_TYPE',
    EDITOR_LOAD = 'EDITOR.LOAD',
    LINTING = 'LINTING',
    GO_TO_OBJECT_DEFINITION = 'GO_TO_OBJECT_DEFINITION',
    REFACTOR_RENAME = 'REFACTOR_RENAME',
    REFACTOR_EXTRACT_VAR = 'REFACTOR_EXTRACT_VAR',
    REFACTOR_EXTRACT_FUNCTION = 'REFACTOR_EXTRACT_FUNCTION',
    REPL = 'REPL',
    PYTHON_INTERPRETER_ACTIVATION_ENVIRONMENT_VARIABLES = 'PYTHON_INTERPRETER_ACTIVATION_ENVIRONMENT_VARIABLES',
    INSIDERS_RELOAD_PROMPT = 'INSIDERS_RELOAD_PROMPT',
    INSIDERS_PROMPT = 'INSIDERS_PROMPT',
    ENVFILE_VARIABLE_SUBSTITUTION = 'ENVFILE_VARIABLE_SUBSTITUTION',
    ENVFILE_WORKSPACE = 'ENVFILE_WORKSPACE',
    WORKSPACE_SYMBOLS_BUILD = 'WORKSPACE_SYMBOLS.BUILD',
    WORKSPACE_SYMBOLS_GO_TO = 'WORKSPACE_SYMBOLS.GO_TO',
    EXECUTION_CODE = 'EXECUTION_CODE',
    EXECUTION_DJANGO = 'EXECUTION_DJANGO',
    DEBUG_ADAPTER_USING_WHEELS_PATH = 'DEBUG_ADAPTER.USING_WHEELS_PATH',
    DEBUG_SESSION_ERROR = 'DEBUG_SESSION.ERROR',
    DEBUG_SESSION_START = 'DEBUG_SESSION.START',
    DEBUG_SESSION_STOP = 'DEBUG_SESSION.STOP',
    DEBUG_SESSION_USER_CODE_RUNNING = 'DEBUG_SESSION.USER_CODE_RUNNING',
    DEBUGGER = 'DEBUGGER',
    DEBUGGER_ATTACH_TO_CHILD_PROCESS = 'DEBUGGER.ATTACH_TO_CHILD_PROCESS',
    DEBUGGER_ATTACH_TO_LOCAL_PROCESS = 'DEBUGGER.ATTACH_TO_LOCAL_PROCESS',
    DEBUGGER_CONFIGURATION_PROMPTS = 'DEBUGGER.CONFIGURATION.PROMPTS',
    DEBUGGER_CONFIGURATION_PROMPTS_IN_LAUNCH_JSON = 'DEBUGGER.CONFIGURATION.PROMPTS.IN.LAUNCH.JSON',

    PYTHON_EXPERIMENTS = 'PYTHON_EXPERIMENTS',
    PYTHON_EXPERIMENTS_DISABLED = 'PYTHON_EXPERIMENTS_DISABLED',
    PYTHON_EXPERIMENTS_OPT_IN_OUT = 'PYTHON_EXPERIMENTS_OPT_IN_OUT',
    PYTHON_EXPERIMENTS_DOWNLOAD_SUCCESS_RATE = 'PYTHON_EXPERIMENTS_DOWNLOAD_SUCCESS_RATE',
    PLAY_BUTTON_ICON_DISABLED = 'PLAY_BUTTON_ICON.DISABLED',
    PYTHON_WEB_APP_RELOAD = 'PYTHON_WEB_APP.RELOAD',
    EXTENSION_SURVEY_PROMPT = 'EXTENSION_SURVEY_PROMPT',
    ACTIVATION_TIP_PROMPT = 'ACTIVATION_TIP_PROMPT',
    ACTIVATION_SURVEY_PROMPT = 'ACTIVATION_SURVEY_PROMPT',
    JOIN_MAILING_LIST_PROMPT = 'JOIN_MAILING_LIST_PROMPT',

    PYTHON_LANGUAGE_SERVER_CURRENT_SELECTION = 'PYTHON_LANGUAGE_SERVER_CURRENT_SELECTION',
    PYTHON_LANGUAGE_SERVER_LIST_BLOB_STORE_PACKAGES = 'PYTHON_LANGUAGE_SERVER.LIST_BLOB_PACKAGES',
    PYTHON_LANGUAGE_SERVER_EXTRACTED = 'PYTHON_LANGUAGE_SERVER.EXTRACTED',
    PYTHON_LANGUAGE_SERVER_DOWNLOADED = 'PYTHON_LANGUAGE_SERVER.DOWNLOADED',
    PYTHON_LANGUAGE_SERVER_ERROR = 'PYTHON_LANGUAGE_SERVER.ERROR',

    PYTHON_LANGUAGE_SERVER_PLATFORM_SUPPORTED = 'PYTHON_LANGUAGE_SERVER.PLATFORM_SUPPORTED',
    PYTHON_LANGUAGE_SERVER_ENABLED = 'PYTHON_LANGUAGE_SERVER.ENABLED',
    PYTHON_LANGUAGE_SERVER_STARTUP = 'PYTHON_LANGUAGE_SERVER.STARTUP',
    PYTHON_LANGUAGE_SERVER_READY = 'PYTHON_LANGUAGE_SERVER.READY',
    PYTHON_LANGUAGE_SERVER_TELEMETRY = 'PYTHON_LANGUAGE_SERVER.EVENT',
    PYTHON_LANGUAGE_SERVER_REQUEST = 'PYTHON_LANGUAGE_SERVER.REQUEST',

    LANGUAGE_SERVER_ENABLED = 'LANGUAGE_SERVER.ENABLED',
    LANGUAGE_SERVER_STARTUP = 'LANGUAGE_SERVER.STARTUP',
    LANGUAGE_SERVER_READY = 'LANGUAGE_SERVER.READY',
    LANGUAGE_SERVER_TELEMETRY = 'LANGUAGE_SERVER.EVENT',
    LANGUAGE_SERVER_REQUEST = 'LANGUAGE_SERVER.REQUEST',
    LANGUAGE_SERVER_TRY_PYLANCE = 'LANGUAGE_SERVER.TRY_PYLANCE',

    TERMINAL_CREATE = 'TERMINAL.CREATE',
    ACTIVATE_ENV_IN_CURRENT_TERMINAL = 'ACTIVATE_ENV_IN_CURRENT_TERMINAL',
    ACTIVATE_ENV_TO_GET_ENV_VARS_FAILED = 'ACTIVATE_ENV_TO_GET_ENV_VARS_FAILED',
    DIAGNOSTICS_ACTION = 'DIAGNOSTICS.ACTION',
    DIAGNOSTICS_MESSAGE = 'DIAGNOSTICS.MESSAGE',
    PLATFORM_INFO = 'PLATFORM.INFO',

    SELECT_LINTER = 'LINTING.SELECT',

    LINTER_NOT_INSTALLED_PROMPT = 'LINTER_NOT_INSTALLED_PROMPT',
    CONFIGURE_AVAILABLE_LINTER_PROMPT = 'CONFIGURE_AVAILABLE_LINTER_PROMPT',
    HASHED_PACKAGE_NAME = 'HASHED_PACKAGE_NAME',
    HASHED_PACKAGE_PERF = 'HASHED_PACKAGE_PERF',

    JEDI_MEMORY = 'JEDI_MEMORY'
}

export enum PlatformErrors {
    FailedToParseVersion = 'FailedToParseVersion',
    FailedToDetermineOS = 'FailedToDetermineOS'
}
