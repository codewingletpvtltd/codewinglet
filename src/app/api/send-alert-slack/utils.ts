import { ContactUsForm } from './types';

export const generateSlackFormat = (data: ContactUsForm) => {
  const { title, fullName, email, phone, projectDetails } = data;
  return `{
            "blocks": [
              {
                "type": "rich_text",
                "elements": [
                  {
                    "type": "rich_text_section",
                    "elements": [
                      {
                        "type": "text",
                        "text": "${title} is trying to Contact us\n"
                      }
                    ]
                  },
                  {
                    "type": "rich_text_list",
                    "style": "bullet",
                    "indent": 0,
                    "border": 0,
                    "elements": [
                      {
                        "type": "rich_text_section",
                        "elements": [
                          {
                            "type": "text",
                            "text": "Full name: ${fullName}"
                          }
                        ]
                      },
                      {
                        "type": "rich_text_section",
                        "elements": [
                          {
                            "type": "text",
                            "text": "Email: "
                          },
                          {
                            "type": "link",
                            "url": "mailto:${email}",
                            "text": "${email}"
                          }
                        ]
                      },
                      {
                        "type": "rich_text_section",
                        "elements": [
                          {
                            "type": "text",
                            "text": "Phone number: ${phone}"
                          }
                        ]
                      },
                      {
                        "type": "rich_text_section",
                        "elements": [
                          {
                            "type": "text",
                            "text": "Project Details: ${projectDetails}"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }`;
};
