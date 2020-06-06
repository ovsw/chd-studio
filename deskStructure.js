import S from '@sanity/desk-tool/structure-builder'
import {MdSettings, MdPerson, MdFolder, MdBook, MdList} from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Services Pages')
                .icon(MdFolder)
                .child(
                  S.list()
                    .title('Services Pages')
                    .items([
                      S.documentListItem()
                        .id('srvChildrensDentistry')
                        .title('Children’s Dentistry')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('srcCleaning')
                        .title('Cleaning')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('srvCrowns')
                        .title('Crowns')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('inlaysOnlays')
                        .title('Inlays and Onlays')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('sensitiveTeeth')
                        .title('Sensitive Teeth')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('invisalign')
                        .title('Invisalign')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('lumineers')
                        .title('Lumineers')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('teethWhitening')
                        .title('Teeth Whitening')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('bridges')
                        .title('Bridges')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('dentalImplants')
                        .title('Dental Implants')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('dentalSedation')
                        .title('Dental Sedation')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('sleepApneaSnorring')
                        .title('Sleep Apnea / Snoring')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('tmjJawPain')
                        .title('TMJ / Jaw Pain')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('fullPartialDentures')
                        .title('Full and Partial Dentures')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('gingivitisGumDisease')
                        .title('Gingivitis and Gum Disease')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('emergencyDentistChandler')
                        .title('Emergency Dentist in Chandler')
                        .schemaType('page')
                    ])
                ),
              S.listItem()
                .title('About us')
                .icon(MdFolder)
                .child(
                  S.list()
                    .title('About Us Pages')
                    .items([
                      S.documentListItem()
                        .id('meetDrAndy')
                        .title('Meet Dr. Andy')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('meetDrJoel')
                        .title('Meet Dr. Joel')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('meetDrTyler')
                        .title('Meet Dr. Tyler')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('ourTeam')
                        .title('Our Team')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('ourOffice')
                        .title('Our Office')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('reviews')
                        .title('Reviews')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('adaCompliance')
                        .title('ADA Compliance')
                        .schemaType('page')
                    ])
                ),
              S.listItem()
                .title('Patient Info Pages')
                .icon(MdFolder)
                .child(
                  S.list()
                    .title('About Us Pages')
                    .items([
                      S.documentListItem()
                        .id('advDentalTech')
                        .title('Advanced Dental Technology')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('financialOptions')
                        .title('Financial Options')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('patientProtectionComfort')
                        .title('Patient Protection and Comfort')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('servicesOverview')
                        .title('Services Overview')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('medicalHistoryForm')
                        .title('Medical History Form')
                        .schemaType('page'),
                      S.documentListItem()
                        .id('smileAssesmetForm')
                        .title('Smile Assessment Form')
                        .schemaType('page')
                    ])
                ),
              S.documentListItem()
                .id('directions')
                .title('Directions')
                .schemaType('page'),
              S.documentListItem()
                .id('appointments')
                .title('Appointments')
                .schemaType('page'),
              S.documentListItem()
                .id('contact')
                .title('Contact')
                .schemaType('page')
            ])
        ),
      S.divider(),
      S.listItem()
        .icon(MdBook)
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .icon(MdList)
        .title('Blog Posts by Category')
        .child(
          S.documentList()
            .title('Categories')
            .menuItems(S.documentTypeList('category').getMenuItems())
            .filter('_type == $type')
            .params({type: 'category'})
            .child(categoryId =>
              S.documentList()
                .title('Posts')
                .menuItems(S.documentTypeList('post').getMenuItems())
                .filter('_type == $type && $categoryId in categories[]._ref')
                .params({type: 'post', categoryId})
            )
        ),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories'))
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      // S.listItem()
      //   .title('Team')
      //   .icon(MdPerson)
      //   .schemaType('person')
      //   .child(S.documentTypeList('person').title('Team Members'))
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      // ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
