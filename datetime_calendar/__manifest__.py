# -*- coding: utf-8 -*-
{
    'name' : 'Datetime Calendar',
    'version' : '16.0',
    'summary': 'Datetime Calendar',
    'sequence': -1,
    'description': """Datetime Calendar""",
    'category': 'Hidden',
    'depends' : ['web'],
    'data': [],
    'installable': True,
    'application': False,
    'assets': {
        'web.assets_backend': [
            'datetime_calendar/static/src/components/*',
        ],
    },
}