import { useQuery } from '@apollo/client';
import Providers from '../../../config/providers';
import PROVIDER_APP_LIST from '../../provider/query/PROVIDER_APP_LIST';
import toMachineName from '@rssapp/storybook/lib/format/string/toMachineName';

const nameTemplate = (name) => `${name} RSS Feed`;
const titleTemplate = (name) => `Create ${name} RSS Feed`;
const descriptionTemplate = (name) => `
  In a matter of seconds and without a single line of code, RSS.app allows you to
    <b>create RSS feeds</b>. Just
    copy and paste the ${name} URL below to get started.`;
const descriptionFromTemplate = (name, fromSection) => `
  In a matter of seconds and without a single line of code, RSS.app allows you to
    <b>create RSS feeds</b> ${fromSection}. Just
    copy and paste the ${name} URL below to get started.`;
const pageDescriptionTemplate = (name) => `Instantly create ${name} RSS Feeds with RSS generator.`;
const pageDescriptionFromTemplate = (name, fromSection) =>
  `Instantly create ${name} RSS Feeds ${fromSection} with RSS generator.`;
const pathTemplate = (id) => `${toMachineName(id)}-rss-feed`;
const logoAltTemplate = (name) => `${name} RSS Feed`;

export const providerAppToProvider = (app) => {
  const { name, id, logo, color, fromSection } = app;
  return {
    _id: id,
    isTemplate: true,
    name: nameTemplate(name),
    h1: titleTemplate(name),
    h2: fromSection ? descriptionFromTemplate(name, fromSection) : descriptionTemplate(name),
    description: fromSection ? pageDescriptionFromTemplate(name, fromSection) : pageDescriptionTemplate(name),
    path: pathTemplate(id),
    color,
    logo,
    logoAlt: logoAltTemplate(name),
    examples: app.examples,
  };
};

function useProviders() {
  const { data: { providerAppList = [] } = {}, ...other } = useQuery(PROVIDER_APP_LIST, {
    variables: { published: true },
  });

  return {
    data: [...Providers, ...providerAppList.map(providerAppToProvider)],
    ...other,
  };
}

export default useProviders;
