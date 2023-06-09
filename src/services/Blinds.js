import axios from 'axios';

const data = {
  status: 'success',
  data: {
    description:
      'For a crisp and contemporary window solution, look no further than our collection of roller blinds. Roller blinds are a simple and practical window dressing, with a versatility that makes them suitable for every room in the home.',
    products: [
      {
        name: 'Blue Roller Blind',
        description:
          'This chic and contemporary blackout roller blind is, unsurprisingly, one of the very bestselling products on our website.',
        images: {
          main: 'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/window-1200/touched_by_design_deluxe_plain_powder_blue.jpg',
          thumb:
            'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/thumb/touched_by_design_deluxe_plain_powder_blue.jpg',
        },
        limits: {
          width: {
            min: 30,
            max: 350,
          },
          drop: {
            min: 25,
            max: 300,
          },
        },
        price_per_metre_squared: 99.99,
      },
      {
        name: 'Red Roller Blind',
        description:
          'Made from 100% polyester, this red roller blind lends class and sophistication to any room in the home, and because Touched by Design is our very own range, we can offer this blind to you at the best possible price.',
        images: {
          main: 'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/window-1200/touched_by_design_absolute_red.jpg',
          thumb:
            'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/thumb/touched_by_design_absolute_red.jpg',
        },
        limits: {
          width: {
            min: 40,
            max: 300,
          },
          drop: {
            min: 35,
            max: 350,
          },
        },
        price_per_metre_squared: 79.99,
      },
      {
        name: 'Green Roller Blind',
        description:
          "Being a blackout blind, this product offers the utmost privacy thanks to its extra-opaque lining, meaning you needn't worry about casting shadows at night time any more than you need worry about onlookers being able to see inside your home.",
        images: {
          main: 'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/window-1200/touched_by_design_supreme_blackout_lime.jpg',
          thumb:
            'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/thumb/touched_by_design_supreme_blackout_lime.jpg',
        },
        limits: {
          width: {
            min: 30,
            max: 350,
          },
          drop: {
            min: 25,
            max: 300,
          },
        },
        price_per_metre_squared: 119.49,
      },
      {
        name: 'Grey Roller Blind',
        description:
          'A blackout roller blind is also a saviour for all those who work night shifts, by blocking out as much external light as possible, allowing you to get a good nights sleep.',
        images: {
          main: 'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/window-1200/touched_by_design_deluxe_plain_pebble_grey.jpg',
          thumb:
            'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/thumb/touched_by_design_deluxe_plain_pebble_grey.jpg',
        },
        limits: {
          width: {
            min: 40,
            max: 300,
          },
          drop: {
            min: 35,
            max: 350,
          },
        },
        price_per_metre_squared: 79.49,
      },
      {
        name: 'White Roller Blind',
        description:
          'Made from the finest dimout material, this blind gives you the perfect balance of light in your home. It blocks out harsh sunlight and warms your home with a soft glow.',
        images: {
          main: 'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/window-1200/touched_by_design_deluxe_plain_porcelain_white.jpg',
          thumb:
            'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/thumb/touched_by_design_deluxe_plain_porcelain_white.jpg',
        },
        limits: {
          width: {
            min: 30,
            max: 350,
          },
          drop: {
            min: 25,
            max: 300,
          },
        },
        price_per_metre_squared: 119.49,
      },
      {
        name: 'Pink Roller Blind',
        description:
          'Benefit from the functionality of a roller blind, including light control, thermal efficiency, privacy and durability. Along with its practicality comes sleekness and style, making your window a statement feature of the room.',
        images: {
          main: 'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/window-1200/louvolite_carnival_paradise_pink.jpg',
          thumb:
            'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/thumb/louvolite_carnival_paradise_pink.jpg',
        },
        limits: {
          width: {
            min: 40,
            max: 300,
          },
          drop: {
            min: 35,
            max: 350,
          },
        },
        price_per_metre_squared: 84.49,
      },
      {
        name: 'Brown Roller Blind',
        description:
          "This blind's blackout material gives you full control over the light in your room and your privacy. When closed it blocks out harsh sunlight and prying eyes, allowing you to enjoy your room in peace.",
        images: {
          main: 'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/window-1200/touched_by_design_absolute_taupe.jpg',
          thumb:
            'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/thumb/touched_by_design_absolute_taupe.jpg',
        },
        limits: {
          width: {
            min: 30,
            max: 350,
          },
          drop: {
            min: 25,
            max: 300,
          },
        },
        price_per_metre_squared: 109.49,
      },
      {
        name: 'Teal Roller Blind',
        description:
          'Durable, resilient and very easy to clean, this roller blind is more than just a stylish addition to your home. Constructed from lightweight yet sturdy fabric, it will stand the test of time whilst looking great.',
        images: {
          main: 'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/window-1200/touched_by_design_rangeless_mint.jpg',
          thumb:
            'https://cdn.interiorgoodsdirect.com/image-system/regular/rollers/roller/thumb/touched_by_design_rangeless_mint.jpg',
        },
        limits: {
          width: {
            min: 40,
            max: 300,
          },
          drop: {
            min: 35,
            max: 350,
          },
        },
        price_per_metre_squared: 96.49,
      },
    ].map((p) => ({ ...p, id: getUniqueId() })),
  },
};

export class BlindsService {
  static users = [];

  static async getListOfBlinds() {
    const dataUrl =
      'https://www.interiorgoodsdirect.com/interview/api/products?key=6HJx2R8st$%Q';
    const resp = await axios.get(dataUrl);

    const respObj = {
      status: resp.data.status,
      description: resp.data.data.description,
      products: resp.data.data.products.map((p) => ({
        ...p,
        id: getUniqueId(),
      })),
    };

    return respObj;
  }
}

export function getUniqueId() {
  return Math.floor(Math.random() * Date.now()).toString(16);
}
