# Hugo Starter

A Hugo starter that has some plumbing in place for;

- [x] scss
- [x] js
- [x] fonts
- [x] opengraph meta data
- [ ] translation
- [ ] single template
- [ ] list template
- [ ] menu?

# Development

## Prerequisites

- **Git**
- **Github** account if you would like to make pull requests
- **Hugo** we are using `hugo_extended_0.111.3` available for download [here](https://github.com/gohugoio/hugo/releases/tag/v0.111.3) or consult the official [documentation](https://gohugo.io/getting-started/installing/)
- **node**

## Setup & install instructions

`git clone https://github.com/TODO/TODO.git && cd TODO`

`hugo server` for a local server - you will be able to access the site at [localhost:1313](http://localhost:1313/).

If you need test the site on multiple devices locally you can bind the address to your local IP, you can then run the command below replacing the IP address.

`hugo server --bind 192.168.10.10 --baseURL http://192.168.10.10`

You would then visit (example IP) [192.168.10.10:1313](http://192.168.10.10:1313)

### Formatting

To set up our pre-commit hook for formatting you will need to run the following

```sh
npm i
npm run prepare
```

## Build

`hugo` command to build. This will create a directory called `public` which contains the website.

## Deployment

Deploys to [TODO](#).

To make development easier the baseURL is set to `/`, it's best to set your domain in the build command `hugo server --baseURL DOMAIN`

- [ ] When a change is committed to the `main` branch the site is rebuilt and deployed.

## Development

## Testing

## License

## Contributing

## Donations
