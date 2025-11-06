import { Couple, Event, Story, Gallery, Wishes, GiftSection, Closing } from './Sections';

export default function ContentSections() {
  return (
    <div>
      <Couple />
      <Event />
      <Story />
      <Gallery />
      <Wishes />
      <GiftSection />
      <Closing />
    </div>
  );
}
