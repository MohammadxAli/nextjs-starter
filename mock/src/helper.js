const faker = require("./faker");

const generateFakeImage = (params) => {
    const {
        width = 1900,
        height = 600,
        min = 890,
        max = 950,
    } = params ?? {
        width: 1900,
        height: 600,
        min: 890,
        max: 950,
    };
    const random = faker.datatype.number({ min, max });
    const image = `https://picsum.photos/id/${random}/${width}/${height}`;
    return image;
};

const generateFakeCountedImage = (
    index,
    { path = "", ext = "jpg", max = 40 }
) => {
    let num = index;
    if (index >= max) {
        num = parseInt(index % max);
    }
    num = num + 1 >= 10 ? num + 1 : "0" + (num + 1);
    return `/media/mock/${path}${num}.${ext}`;
};

const generateFakeHtmlContent = () => {
    const image = generateFakeImage({ height: 800 });
    const image2 = generateFakeImage();
    let html = `
    <p>${faker.lorem.paragraphs()}</p>
    <div class="aspect-w-9 aspect-h-4">
        <img src='${image}' class='object-cover w-full mx-auto rounded-md' style='margin-top: 0;' />
    </div>
    <p>${faker.lorem.paragraphs()}</p>
    <h2 class="font-bold text-lg">1.${faker.lorem.words(5)}</h2>
    <p>${faker.lorem.paragraphs()}</p>
    <div class="aspect-w-9 aspect-h-4">
        <img src='${image2}' class='object-cover w-full mx-auto rounded-md' style='margin-top: 0;' />
    </div>
    <h2 class="font-bold text-lg">2.${faker.lorem.words(5)}</h2>
    <p>${faker.lorem.paragraphs()}</p>
    <p>${faker.lorem.paragraphs()}</p>
    <p>${faker.lorem.paragraphs()}</p>
    `;
    return html;
};

const forceEnglishLocale = (callback) => {
    faker.locale = "en";
    callback();
    faker.locale = process.env.DEFAULT_LOCALE;
};

module.exports = {
    generateFakeHtmlContent,
    generateFakeImage,
    forceEnglishLocale,
    generateFakeCountedImage,
};
