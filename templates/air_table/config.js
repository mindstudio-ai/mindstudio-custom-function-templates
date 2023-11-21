config = {
  name: "Airtable Integration",
  description: "Script to create a new record in an Airtable base",
  author: 'Kevin L',
  configurationSections: [
    {
      title: 'Configuration',
      items: [
       {
          label: 'Success value',
          variable: 'successOut',
          type: 'text',
        },
        {
          label: 'Airtable API KEY',
          variable: 'airtable_api_key',
          helpText: 'API key from Airtable. ',
          type: 'text',
        },
        {
          label: 'Airtable base id',
          variable: 'airtable_base_id',
          helpText: 'API key from Airtable. ',
          type: 'text',
        },
        {
          label: 'Airtable Table Name',
          variable: 'airtable_table_name',
          helpText: 'API key from Airtable. ',
          type: 'text',
        },
        {
          label: 'Title',
          variable: 'title',
          helpText: 'Extract title from text',
          type: 'text',
        },
        {
          label: 'Description',
          variable: 'description',
          helpText: 'extract description from text ',
          type: 'text',
        },
        {
          label: 'Keywords',
          variable: 'keywords',
          helpText: 'extract keywords from text ',
          type: 'text',
        },
      ],
    }
  ],
}
