# RIP Quick Add

Quickly create Google Calendar events from plain text.

![preview.jpg](https://raw.githubusercontent.com/mtimkovich/rip_quick_add/main/preview.jpg)

[Quick Add][article] was a Google Calendar feature that existed from 2012–2018 that enabled creating calendar events from natural language text input. I loved it and they deprecated it from me ☹️. This is my attempt to resurrect Quick Add. It uses the [Sherlock][sherlock] library to extract time data from text.

## How it works

1. Takes a text input,
2. parses the input to find date info, and then
3. returns a Google Calendar URL for adding the event to your calendar.

## Usage

I have a running implementation [on my website][max].

If you want to run the webapp locally:

```
yarn install
yarn start
```

## Documentation

The "API" this app is using is documented [here][docs].

# Author

Max Timkovich

[article]: https://gsuitetips.com/tips/calendar/use-quick-add-to-speed-up-google-calendar-entries/
[docs]: https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/google.md#google
[max]: https://timkovi.ch/rip_quick_add
[sherlock]: https://github.com/neilgupta/Sherlock#readme
