const items = [
    {
        tag: 'tpscroll',
        name: 'Town Portal Scroll',
        description: "<h1>Use: Teleport</h1>After channeling for 3 seconds, teleports you to a target friendly building. <br><br>Double-click to teleport to your team's base fountain.",
        notes: 'If multiple heroes teleport to the same location in succession, the channeling time will be increased for each successive hero.<br />Teleport can be prevented or canceled by Root abilities.',
        lore: 'What a hero truly needs.',
        cost: '50',
        manacost: '75',
        cooldown: '80.0',
        attrib: '',
        category: 'Consumables',
        npc: {
            SideShop: '1'
        },
        bonuses: {

        }
    },
    {
        tag: 'clarity',
        name: 'Clarity',
        description: '<h1>Use: Replenish</h1> Grants 4.5 mana regeneration to the target for 50 seconds.<br><br>If the unit is attacked by an enemy hero, tower, or Roshan, the effect is lost.<br><br>Range: 250',
        notes: '',
        lore: 'Clear water that enhances the ability to meditate.',
        cost: '50',
        attrib: '',
        category: 'Consumables',
        npc: {
            SideShop: '0'
        },
        bonuses: {

        }
    },
    {
        tag: 'faerie_fire',
        name: 'Faerie Fire',
        description: '<h1>Use: Imbue</h1> Instantly restores 85 health.',
        notes: '',
        lore: 'The ethereal flames from the ever-burning ruins of Kindertree ignite across realities.',
        cost: '70',
        cooldown: '5.0',
        attrib: '+ <span class="attribVal">2</span> <span class="attribValText">Damage</span>',
        category: 'Consumables',
        npc: {
            SideShop: '0'
        },
        bonuses: {
            bonus_damage: 2
        }
    },
    {
        tag: 'smoke_of_deceit',
        name: 'Smoke of Deceit',
        description: '<h1>Use: Disguise</h1> Turns the caster and all allied player-controlled units in a 1200 radius invisible, and grants 15% bonus movement speed for 35 seconds. <br><br>Attacking, or moving within 1025 range of an enemy hero or tower, will break the invisibility. <br><br>Disguise grants invisibility that is immune to True Sight.',
        notes: '',
        lore: "The charlatan wizard Myrddin's only true contribution to the arcane arts.",
        cost: '80',
        cooldown: '1.0',
        attrib: '',
        category: 'Consumables',
        npc: {

        },
        bonuses: {
            bonus_movement_speed: 15
        }
    },
    {
        tag: 'ward_observer',
        name: 'Observer Ward',
        description: '<h1>Use: Plant</h1>Plants an Observer Ward, an invisible watcher that gives ground vision in a 1600 radius to your team. Lasts 6 minutes.<br><br>Hold Control to give one Observer Ward to an allied hero.<br><br>Range: 500',
        notes: '',
        lore: 'A form of half-sentient plant, often cultivated by apprentice wizards.',
        cost: '75',
        cooldown: '1.0',
        attrib: '',
        category: 'Consumables',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'ward_sentry',
        name: 'Sentry Ward',
        description: '<h1>Use: Plant</h1> Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a 1000 radius.<br>Lasts 6 minutes.<br><br>Does not grant ground vision.<br>Hold Control to give one Sentry Ward to an allied hero.<br><br>Range: 500',
        notes: '',
        lore: 'A form of plant originally grown in the garden of a fearful king.',
        cost: '100',
        cooldown: '1.0',
        attrib: '',
        category: 'Consumables',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'enchanted_mango',
        name: 'Enchanted Mango',
        description: '<h1>Use: Eat Mango</h1> Instantly restores 125 mana.<br><br>Range: 400',
        notes: 'Hold Control to use on a nearby allied hero.',
        lore: 'The bittersweet flavors of Jidi Isle are irresistible to amphibians.',
        cost: '70',
        attrib: '+ <span class="attribVal">0.6</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Consumables',
        npc: {
            SideShop: '0'
        },
        bonuses: {

        }
    },
    {
        tag: 'flask',
        name: 'Healing Salve',
        description: '<h1>Use: Salve</h1> Grants 50 health regeneration to the target for 8 seconds.<br><br>If the unit is attacked by an enemy hero, tower, or Roshan, the effect is lost.<br><br>Range: 250',
        notes: '',
        lore: 'A magical salve that can quickly mend even the deepest of wounds.',
        cost: '110',
        attrib: '',
        category: 'Consumables',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'tango',
        name: 'Tango',
        description: '<h1>Use: Devour</h1> Consumes a target tree to gain 7 health regeneration for 16 seconds. Consuming a ward or Ironwood Tree doubles the heal amount.<br><br>Comes with 3 charges.  Can be used on an allied hero to give them one Tango.<br><br>Range: 165<br>Ward Range: 450',
        notes: '',
        lore: 'Forage to survive on the battlefield.',
        cost: '90',
        attrib: '',
        category: 'Consumables',
        npc: {
            SideShop: '0'
        },
        bonuses: {

        }
    },
    {
        tag: 'tome_of_knowledge',
        name: 'Tome of Knowledge',
        description: '<h1>Use: Enlighten</h1>Grants you 700 experience plus 135 per tome consumed by your team.<br><br>Tomes Used By Team: %customval_team_tomes_used%',
        notes: '',
        lore: 'That which raises beast to man and man to god.',
        cost: '150',
        cooldown: '0.0',
        attrib: '',
        category: 'Consumables',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'dust',
        name: 'Dust of Appearance',
        description: '<h1>Use: Reveal</h1>Reveals and slows invisible heroes by 20% in a 1050 radius around the caster for 12 seconds.',
        notes: 'Places a debuff on enemy units in the area that reveals them when they are invisible.',
        lore: 'One may hide visage, but never volume.',
        cost: '180',
        manacost: '0',
        cooldown: '30.0',
        attrib: '',
        category: 'Consumables',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'courier',
        name: 'Animal Courier',
        description: "<h1>Use: Deploy Courier</h1> Deploys a creature to carry items to and from your team's base.",
        notes: '',
        lore: 'Losing the courier is punishable by death.',
        cost: '50',
        attrib: '',
        category: 'Consumables',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'bottle',
        name: 'Bottle',
        description: '<h1>Active: Regenerate</h1>Consumes a charge to restore 125 health and 75 mana over 2.5 seconds. If the hero is attacked by an enemy hero, tower, or Roshan, the effect is lost.<br><br>The Bottle automatically refills at the fountain.<br><br>Hold Control to use on an allied hero.<br><br>Range: 350<br />\r\n<h1>Passive:  Store Rune</h1>Runes can be stored in the bottle for later use by right-clicking them. Unused runes will automatically activate after 2 minutes.<br><br>Using a stored rune fully refills the Bottle.',
        notes: "Bottle is shareable. Stored runes cannot be shared.<br />If Bottle does not have full charges and is placed on a courier, the courier's movespeed will be slowed by 30%.",
        lore: 'An old bottle that survived the ages, the contents placed inside become enchanted.',
        cost: '650',
        cooldown: '0.5',
        attrib: '',
        category: 'Consumables',
        npc: {
            SecretShop: '1',
            GlobalShop: '1'
        },
        bonuses: {

        }
    },
    {
        tag: 'branches',
        name: 'Iron Branch',
        description: '<h1>Use: Plant Tree</h1> Targets the ground to plant a happy little tree that lasts for 20 seconds.<br><br>Range: 200',
        notes: '',
        lore: 'A seemingly ordinary branch, its ironlike qualities are bestowed upon the bearer.',
        cost: '50',
        cooldown: '0.0',
        attrib: '+ <span class="attribVal">1</span> <span class="attribValText">All Attributes</span>',
        category: 'Attributes',
        npc: {

        },
        bonuses: {
            bonus_all_stats: 1
        }
    },
    {
        tag: 'gauntlets',
        name: 'Gauntlets of Strength',
        description: '',
        notes: '',
        lore: 'Studded leather gloves that add brute strength.',
        cost: '135',
        attrib: '+ <span class="attribVal">3</span> <span class="attribValText">Strength</span>',
        category: 'Attributes',
        npc: {

        },
        bonuses: {
            bonus_strength: 3
        }
    },
    {
        tag: 'slippers',
        name: 'Slippers of Agility',
        description: '',
        notes: '',
        lore: 'Light boots made from spider skin that tingles your senses.',
        cost: '135',
        attrib: '+ <span class="attribVal">3</span> <span class="attribValText">Agility</span>',
        category: 'Attributes',
        npc: {

        },
        bonuses: {
            bonus_agility: 3
        }
    },
    {
        tag: 'mantle',
        name: 'Mantle of Intelligence',
        description: '',
        notes: '',
        lore: 'A beautiful sapphire mantle worn by generations of queens.',
        cost: '135',
        attrib: '+ <span class="attribVal">3</span> <span class="attribValText">Intelligence</span>',
        category: 'Attributes',
        npc: {

        },
        bonuses: {
            bonus_intellect: 3
        }
    },
    {
        tag: 'circlet',
        name: 'Circlet',
        description: '',
        notes: '',
        lore: 'An elegant circlet designed for human princesses.',
        cost: '165',
        attrib: '+ <span class="attribVal">2</span> <span class="attribValText">All Attributes</span>',
        category: 'Attributes',
        npc: {

        },
        bonuses: {
            bonus_all_stats: 2
        }
    },
    {
        tag: 'belt_of_strength',
        name: 'Belt of Strength',
        description: '',
        notes: '',
        lore: 'A valued accessory for improving vitality.',
        cost: '450',
        attrib: '+ <span class="attribVal">6</span> <span class="attribValText">Strength</span>',
        category: 'Attributes',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_strength: 6
        }
    },
    {
        tag: 'boots_of_elves',
        name: 'Band of Elvenskin',
        description: '',
        notes: '',
        lore: 'A tensile fabric often used for its light weight and ease of movement.',
        cost: '450',
        attrib: '+ <span class="attribVal">6</span> <span class="attribValText">Agility</span>',
        category: 'Attributes',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_agility: 6
        }
    },
    {
        tag: 'robe',
        name: 'Robe of the Magi',
        description: '',
        notes: '',
        lore: 'This robe corrupts the soul of the user, but provides wisdom in return.',
        cost: '450',
        attrib: '+ <span class="attribVal">6</span> <span class="attribValText">Intelligence</span>',
        category: 'Attributes',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_intellect: 6
        }
    },
    {
        tag: 'crown',
        name: 'Crown',
        description: '',
        notes: '',
        lore: '',
        cost: '450',
        attrib: '+ <span class="attribVal">4</span> <span class="attribValText">All Attributes</span>',
        category: 'Attributes',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_all_stats: 4
        }
    },
    {
        tag: 'ogre_axe',
        name: 'Ogre Axe',
        description: '',
        notes: '',
        lore: 'You grow stronger just by holding it.',
        cost: '1000',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Strength</span>',
        category: 'Attributes',
        npc: {

        },
        bonuses: {
            bonus_strength: 10
        }
    },
    {
        tag: 'blade_of_alacrity',
        name: 'Blade of Alacrity',
        description: '',
        notes: '',
        lore: 'A long blade imbued with time magic.',
        cost: '1000',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Agility</span>',
        category: 'Attributes',
        npc: {

        },
        bonuses: {
            bonus_agility: 10
        }
    },
    {
        tag: 'staff_of_wizardry',
        name: 'Staff of Wizardry',
        description: '',
        notes: '',
        lore: 'A staff of magical powers passed down from the eldest mages.',
        cost: '1000',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Intelligence</span>',
        category: 'Attributes',
        npc: {

        },
        bonuses: {
            bonus_intellect: 10
        }
    },
    {
        tag: 'ring_of_protection',
        name: 'Ring of Protection',
        description: '',
        notes: '',
        lore: 'A glimmering ring that defends its bearer.',
        cost: '175',
        attrib: '+ <span class="attribVal">2</span> <span class="attribValText">Armor</span>',
        category: 'Armaments',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_armor: 2
        }
    },
    {
        tag: 'stout_shield',
        name: 'Stout Shield',
        description: '<h1>Passive: Damage Block</h1>Grants a 50% chance to block 20 damage from incoming attacks on melee heroes, and 9 damage on ranged.',
        notes: 'Multiple sources of damage block do not stack.',
        lore: "One man's wine barrel bottom is another man's shield.",
        cost: '200',
        attrib: '',
        category: 'Armaments',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'quelling_blade',
        name: 'Quelling Blade',
        description: '<h1>Active: Chop Tree/Ward</h1> Destroy a target tree or ward. Chop cast range is increased when targeting wards.<br><br>Tree Range: 350<BR>Ward Range: 450<br />\r\n<h1>Passive: Quell</h1> Increases attack damage against non-hero units by 24 for melee heroes, and 7 for ranged.',
        notes: "Effects of multiple quelling blades do not stack.<br />Chop can be used to destroy Techies' Remote Mines.",
        lore: 'The axe of a fallen gnome, it allows you to effectively maneuver the forest.',
        cost: '200',
        manacost: '0',
        cooldown: '4.0',
        attrib: '',
        category: 'Armaments',
        npc: {
            SideShop: '1'
        },
        bonuses: {

        }
    },
    {
        tag: 'infused_raindrop',
        name: 'Infused Raindrops',
        description: '<h1>Passive: Magical Damage Block</h1> Consumes a charge to block 120 magic damage from damage instances over 50 damage. <br><br>Comes with 5 charges. When the charges are gone, the item disappears.',
        notes: 'Uses at most one charge per damage instance.',
        lore: 'Elemental protection from magical assaults.',
        cost: '225',
        cooldown: '7.0',
        attrib: '+ <span class="attribVal">0.75</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Armaments',
        npc: {
            SideShop: '0'
        },
        bonuses: {
            bonus_armor: 0,
            bonus_magical_armor: 0
        }
    },
    {
        tag: 'orb_of_venom',
        name: 'Orb of Venom',
        description: '<h1>Passive: Poison Attack</h1>Poisons the target, dealing 5 magical damage per second and slowing movement by 12% if the equipped hero is melee, or 3 magical damage per second and slowing movement by 4% if they are ranged. Lasts for 3 seconds.',
        notes: '',
        lore: 'Envenoms your veapon with the venom of a venomous viper.',
        cost: '275',
        attrib: '',
        category: 'Armaments',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'blight_stone',
        name: 'Blight Stone',
        description: "<h1>Passive: Lesser Corruption</h1> Your attacks reduce the target's armor by 2 for 8 seconds.",
        notes: '',
        lore: 'An unnerving stone unearthed beneath the Fields of Endless Carnage.',
        cost: '300',
        attrib: '',
        category: 'Armaments',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'blades_of_attack',
        name: 'Blades of Attack',
        description: '',
        notes: '',
        lore: 'The damage of these small, concealable blades should not be underestimated.',
        cost: '430',
        attrib: '+ <span class="attribVal">9</span> <span class="attribValText">Damage</span>',
        category: 'Armaments',
        npc: {

        },
        bonuses: {
            bonus_damage: 9
        }
    },
    {
        tag: 'chainmail',
        name: 'Chainmail',
        description: '',
        notes: '',
        lore: 'A medium weave of metal chains.',
        cost: '550',
        attrib: '+ <span class="attribVal">5</span> <span class="attribValText">Armor</span>',
        category: 'Armaments',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_armor: 5
        }
    },
    {
        tag: 'quarterstaff',
        name: 'Quarterstaff',
        description: '',
        notes: '',
        lore: 'A basic staff that allows you to strike quickly.',
        cost: '875',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Attack Speed</span>',
        category: 'Armaments',
        npc: {

        },
        bonuses: {
            bonus_damage: 10
        }
    },
    {
        tag: 'helm_of_iron_will',
        name: 'Helm of Iron Will',
        description: '',
        notes: '',
        lore: 'The helmet of a legendary warrior who fell in battle.',
        cost: '900',
        attrib: '+ <span class="attribVal">5</span> <span class="attribValText">Armor</span><br />\n+ <span class="attribVal">3.5</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Armaments',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_armor: 5
        }
    },
    {
        tag: 'javelin',
        name: 'Javelin',
        description: '<h1>Passive: Pierce</h1>Grants each attack a 25% chance to pierce through evasion and deal 100 bonus magical damage.',
        notes: '',
        lore: "A rather typical spear that can sometimes pierce through an enemy's armor when used to attack.",
        cost: '1100',
        attrib: '',
        category: 'Armaments',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'broadsword',
        name: 'Broadsword',
        description: '',
        notes: '',
        lore: 'The classic weapon of choice for knights, this blade is sturdy and reliable for slaying enemies.',
        cost: '1200',
        attrib: '+ <span class="attribVal">18</span> <span class="attribValText">Damage</span>',
        category: 'Armaments',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_damage: 18
        }
    },
    {
        tag: 'claymore',
        name: 'Claymore',
        description: '',
        notes: '',
        lore: "A sword that can cut through armor, it's a commonly chosen first weapon for budding swordsmen.",
        cost: '1400',
        attrib: '+ <span class="attribVal">21</span> <span class="attribValText">Damage</span>',
        category: 'Armaments',
        npc: {

        },
        bonuses: {
            bonus_damage: 21
        }
    },
    {
        tag: 'mithril_hammer',
        name: 'Mithril Hammer',
        description: '',
        notes: '',
        lore: 'A hammer forged of pure mithril.',
        cost: '1600',
        attrib: '+ <span class="attribVal">24</span> <span class="attribValText">Damage</span>',
        category: 'Armaments',
        npc: {

        },
        bonuses: {
            bonus_damage: 24
        }
    },
    {
        tag: 'magic_stick',
        name: 'Magic Stick',
        description: '<h1>Active: Energy Charge</h1> Instantly restores 15 health and mana per charge stored.<br><br> Max 10 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability.',
        notes: 'Gains charges for spells cast by visible enemies in 1200 range.<br />Certain abilities and item abilities will not add charges.',
        lore: 'A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.',
        cost: '200',
        cooldown: '13.0',
        attrib: '',
        category: 'Arcane',
        npc: {
            SideShop: '1'
        },
        bonuses: {

        }
    },
    {
        tag: 'wind_lace',
        name: 'Wind Lace',
        description: 'Bonuses from multiple Wind Laces do not stack.',
        notes: '',
        lore: 'Hasten to battle on wind-touched heels.',
        cost: '250',
        attrib: '+ <span class="attribVal">20%</span> <span class="attribValText">Movement Speed</span>',
        category: 'Arcane',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'ring_of_regen',
        name: 'Ring of Regen',
        description: '',
        notes: 'Ring of Regen is shareable.',
        lore: 'This ring is considered a good luck charm among the Gnomes.',
        cost: '300',
        attrib: '+ <span class="attribVal">2</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Arcane',
        npc: {

        },
        bonuses: {
            bonus_health_regen: 2
        }
    },
    {
        tag: 'sobi_mask',
        name: "Sage's Mask",
        description: '',
        notes: "Sage's Mask is shareable.",
        lore: 'A mask commonly used by mages and warlocks for various rituals.',
        cost: '325',
        attrib: '+ <span class="attribVal">0.75</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Arcane',
        npc: {

        },
        bonuses: {
            bonus_mana_regen: 0.75
        }
    },
    {
        tag: 'boots',
        name: 'Boots of Speed',
        description: 'Flat movement speed bonuses from multiple pairs of boots do not stack.',
        notes: '',
        lore: 'Fleet footwear, increasing movement.',
        cost: '500',
        attrib: '+ <span class="attribVal">15%</span> <span class="attribValText">Movement Speed</span>',
        category: 'Arcane',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_movement_speed: 15
        }
    },
    {
        tag: 'gloves',
        name: 'Gloves of Haste',
        description: '',
        notes: '',
        lore: 'A pair of magical gloves that seems to render weapons weightless.',
        cost: '500',
        attrib: '+ <span class="attribVal">20</span> <span class="attribValText">Attack Speed</span>',
        category: 'Arcane',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_attack_speed: 20
        }
    },
    {
        tag: 'cloak',
        name: 'Cloak',
        description: '',
        notes: 'Stacks multiplicatively with other sources of spell resistance.',
        lore: 'A cloak made of a magical material that works to dispel any magic cast on it.',
        cost: '550',
        attrib: '+ <span class="attribVal">15%</span> <span class="attribValText">Magic Resistance</span>',
        category: 'Arcane',
        npc: {
            SideShop: '1'
        },
        bonuses: {
            bonus_magical_armor: 15
        }
    },
    {
        tag: 'ring_of_tarrasque',
        name: 'Ring of Tarrasque',
        description: '',
        notes: '',
        lore: '',
        cost: '700',
        attrib: '+ <span class="attribVal">150</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">3.75</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Arcane',
        npc: {

        },
        bonuses: {
            bonus_health: 150,
            bonus_health_regen: 3.75
        }
    },
    {
        tag: 'ring_of_health',
        name: 'Ring of Health',
        description: '',
        notes: 'Ring of Health is shareable.',
        lore: "A shiny ring found beneath a fat halfling's corpse.",
        cost: '850',
        attrib: '+ <span class="attribVal">6</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Arcane',
        npc: {
            SecretShop: '1',
            GlobalShop: '1'
        },
        bonuses: {
            bonus_health_regen: 6
        }
    },
    {
        tag: 'void_stone',
        name: 'Void Stone',
        description: '',
        notes: 'Void Stone is shareable.',
        lore: 'Jewelry that was once used to channel nether realm magic, this ring pulses with energy.',
        cost: '850',
        attrib: '+ <span class="attribVal">1.75</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Arcane',
        npc: {
            SideShop: '1',
            SecretShop: '1',
            GlobalShop: '1'
        },
        bonuses: {
            bonus_mana_regen: 1.75
        }
    },
    {
        tag: 'gem',
        name: 'Gem of True Sight',
        description: "<h1>Passive: True Sight</h1> Grants the ability to see invisible units and wards to any allied vision within 900 range of its carrier. <br />\r\n<h1>Passive: Everlasting</h1><font color='#e03e2e'>Dropped on death, and cannot be destroyed.</font>",
        notes: 'Disabled while on a courier.',
        lore: "Not one thrall creature of the depths,\r\nNor spirit bound in drowning's keep,\r\nNor Maelrawn the Tentacular,\r\nShall rest till seas, gem comes to sleep.",
        cost: '900',
        attrib: '',
        category: 'Arcane',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'lifesteal',
        name: 'Morbid Mask',
        description: '<h1>Passive: Lifesteal</h1>Heals the attacker for 15% of attack damage dealt.',
        notes: '',
        lore: 'A mask that drains the energy of those caught in its gaze.',
        cost: '900',
        attrib: '',
        category: 'Arcane',
        npc: {
            SideShop: '1'
        },
        bonuses: {

        }
    },
    {
        tag: 'shadow_amulet',
        name: 'Shadow Amulet',
        description: '<h1>Active: Fade</h1>Grants invisibility to you or a target allied hero as long as the target unit remains still.  <br><br>Has a 1.25 second fade time, and breaks instantly upon moving. <br><br>There is no cooldown when using this item on yourself.<br><br>Range: 600',
        notes: '',
        lore: "A small talisman that clouds the senses of one's enemies when held perfectly still.",
        cost: '1400',
        manacost: '0',
        cooldown: '7.0',
        attrib: '+ <span class="attribVal">20</span> <span class="attribValText">Attack Speed</span>',
        category: 'Arcane',
        npc: {

        },
        bonuses: {
            bonus_attack_speed: 20
        }
    },
    {
        tag: 'ghost',
        name: 'Ghost Scepter',
        description: '<h1>Active: Ghost Form</h1> You enter ghost form for 4 seconds, becoming immune to physical damage, but are unable to attack and 40% more vulnerable to magic damage.',
        notes: 'Ends if you become Spell Immune, and will have no effect if you are already Spell Immune.<br />Shares cooldown with Ethereal Blade.',
        lore: 'Imbues the wielder with a ghostly presence, allowing them to evade physical damage.',
        cost: '1500',
        cooldown: '20.0',
        attrib: '+ <span class="attribVal">5</span> <span class="attribValText">All Attributes</span>',
        category: 'Arcane',
        npc: {

        },
        bonuses: {
            bonus_all_stats: 5
        }
    },
    {
        tag: 'blink',
        name: 'Blink Dagger',
        description: '<h1>Active: Blink</h1> Teleport to a target point up to 1200 units away. <br><br>Blink Dagger cannot be used for 3 seconds after taking damage from an enemy hero or Roshan.',
        notes: "Self-casting will cause you to teleport in the direction of your team's fountain.<br />If you used Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
        lore: 'The fabled dagger used by the fastest assassin ever to walk the lands.',
        cost: '2250',
        manacost: '0',
        cooldown: '15.0',
        attrib: '',
        category: 'Arcane',
        npc: {
            SideShop: '1'
        },
        bonuses: {

        }
    },
    {
        tag: 'magic_wand',
        name: 'Magic Wand',
        description: '<h1>Active: Energy Charge</h1>Instantly restores 15 health and mana per charge stored. <br><br>Max 20 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability.',
        notes: 'Gains charges for spells cast by visible enemies in 1200 range.<br />Certain abilities and item abilities will not add charges.',
        lore: 'A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.',
        cost: '450',
        cooldown: '13.0',
        attrib: '+ <span class="attribVal">3</span> <span class="attribValText">All Attributes</span>',
        category: 'Common',
        components: [
            'item_magic_stick',
            'item_branches',
            'item_branches'
        ],
        recipeCost: '150',
        npc: {

        },
        bonuses: {
            bonus_all_stats: 3
        }
    },
    {
        tag: 'null_talisman',
        name: 'Null Talisman',
        description: '',
        notes: '',
        lore: 'A small gemstone attached to several chains.',
        cost: '515',
        attrib: '+ <span class="attribVal">3</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">3</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">Intelligence</span><br />\n+Spell Amplification <span class="attribVal">3%</span>',
        category: 'Common',
        components: [
            'item_circlet',
            'item_mantle'
        ],
        recipeCost: '215',
        npc: {

        },
        bonuses: {
            bonus_strength: 3,
            bonus_agility: 3,
            bonus_intellect: 6
        }
    },
    {
        tag: 'wraith_band',
        name: 'Wraith Band',
        description: '',
        notes: '',
        lore: 'A circlet with faint whispers echoing about it.',
        cost: '515',
        attrib: '+ <span class="attribVal">3</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">3</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">Attack Speed</span>',
        category: 'Common',
        components: [
            'item_circlet',
            'item_slippers'
        ],
        recipeCost: '215',
        npc: {

        },
        bonuses: {
            bonus_attack_speed: 6,
            bonus_strength: 3,
            bonus_agility: 6,
            bonus_intellect: 3
        }
    },
    {
        tag: 'bracer',
        name: 'Bracer',
        description: '',
        notes: '',
        lore: 'The bracer is a common choice to toughen up defenses and increase longevity.',
        cost: '515',
        attrib: '+ <span class="attribVal">6</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">3</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">3</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">6%</span> <span class="attribValText">Magic Resistance</span>',
        category: 'Common',
        components: [
            'item_circlet',
            'item_gauntlets'
        ],
        recipeCost: '215',
        npc: {

        },
        bonuses: {
            bonus_strength: 6,
            bonus_agility: 3,
            bonus_intellect: 3
        }
    },
    {
        tag: 'soul_ring',
        name: 'Soul Ring',
        description: '<h1>Active: Sacrifice</h1> Consume 170 health to temporarily gain 150 mana.  Lasts 10 seconds.<br><br>If the mana gained cannot fit in your mana pool, it creates a buffer of mana that will be used before your mana pool.',
        notes: 'If this mana is not used before the duration ends, the extra mana is lost.',
        lore: 'A ring that feeds on the souls of those who wear it.',
        cost: '770',
        manacost: '0',
        cooldown: '25.0',
        attrib: '+ <span class="attribVal">6</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">2.5</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Common',
        components: [
            'item_ring_of_regen',
            'item_gauntlets',
            'item_gauntlets'
        ],
        recipeCost: '200',
        npc: {

        },
        bonuses: {
            bonus_health_regen: 2.5,
            bonus_strength: 6
        }
    },
    {
        tag: 'phase_boots',
        name: 'Phase Boots',
        description: '<h1>Passive: Phase</h1> When targeting an enemy unit up to %attack_range_limit% range away, you gain 22% increased movement speed on melee heroes, and 10% on ranged heroes, and lets you move through units and turn more quickly.<br />\r\nFlat movement speed bonuses from multiple pairs of boots do not stack.',
        notes: '',
        lore: 'Boots that allow the wearer to travel between the ether.',
        cost: '1480',
        cooldown: '8.0',
        attrib: '+ <span class="attribVal">15%</span> <span class="attribValText">Movement Speed</span><br />\n+ <span class="attribVal">0</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">Armor</span>',
        category: 'Common',
        components: [
            'item_boots',
            'item_chainmail',
            'item_blades_of_attack'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_armor: 6,
            bonus_movement_speed: 15,
            bonus_attack_speed: 0
        }
    },
    {
        tag: 'power_treads',
        name: 'Power Treads',
        description: '<h1>Active: Switch Attribute</h1>Switches between +10 Strength, +10 Agility, or +10 Intelligence.<br />\r\nFlat movement speed bonuses from multiple pairs of boots do not stack.',
        notes: 'Power Treads can be built using a Belt of Strength, Band of Elvenskin, or a Robe of the Magi.',
        lore: 'A pair of tough-skinned boots that change to meet the demands of the wearer.',
        cost: '1450',
        attrib: '+ <span class="attribVal">15%</span> <span class="attribValText">Movement Speed</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Selected Attribute</span><br />\n+ <span class="attribVal">0</span> <span class="attribValText">Damage</span>',
        category: 'Common',
        components: [
            'item_boots',
            'item_gloves',
            'item_belt_of_strength'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 0,
            bonus_movement_speed: 15,
            bonus_attack_speed: 20
        }
    },
    {
        tag: 'oblivion_staff',
        name: 'Oblivion Staff',
        description: '',
        notes: '',
        lore: 'Deceptively hidden as an ordinary quarterstaff, it is actually very powerful, much like the Eldritch who originally possessed it.',
        cost: '1650',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">1.25</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Common',
        components: [
            'item_quarterstaff',
            'item_sobi_mask',
            'item_robe'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 10,
            bonus_attack_speed: 10,
            bonus_mana_regen: 1.25,
            bonus_intellect: 10
        }
    },
    {
        tag: 'pers',
        name: 'Perseverance',
        description: '',
        notes: 'Perseverance is shareable.',
        lore: 'A gem that grants heart to the bearer.',
        cost: '1700',
        attrib: '+ <span class="attribVal">6</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">2</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Common',
        components: [
            'item_ring_of_health',
            'item_void_stone'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_health_regen: 6,
            bonus_mana_regen: 2
        }
    },
    {
        tag: 'hand_of_midas',
        name: 'Hand of Midas',
        description: '<h1>Active: Transmute</h1> Kills a non-hero target for 160 gold and 1.85x experience. <br><br> Cannot be used on Ancient Creeps.<br><br>Range: 600',
        notes: 'The gold given is reliable gold (you do not get the normal creep bounty).<br />Experience gained by using Transmute is not shared.',
        lore: "Preserved through unknown magical means, the Hand of Midas is a weapon of greed, sacrificing animals to line the owner's pockets.",
        cost: '2150',
        manacost: '0',
        cooldown: '90.0',
        attrib: '+ <span class="attribVal">40</span> <span class="attribValText">Attack Speed</span>',
        category: 'Common',
        components: [
            'item_gloves'
        ],
        recipeCost: '1650',
        npc: {

        },
        bonuses: {
            bonus_attack_speed: 40
        }
    },
    {
        tag: 'travel_boots',
        name: 'Boots of Travel',
        description: '<h1>Active: Teleport</h1>Teleports you to an allied non-hero unit or structure. Teleporting to a unit is interrupted if the target unit dies.<br><br>Adds 10 seconds to the cooldown of Town Portal Scroll.<br />\r\nMovement speed bonuses from multiple pairs of boots do not stack.',
        notes: '',
        lore: 'Winged boots that grant omnipresence.',
        cost: '2500',
        manacost: '75',
        cooldown: '45.0',
        attrib: '+ <span class="attribVal">32%</span> <span class="attribValText">Movement Speed</span>',
        category: 'Common',
        components: [
            'item_boots'
        ],
        recipeCost: '2000',
        npc: {
            UpgradeRecipe: 'item_recipe_travel_boots'
        },
        bonuses: {
            bonus_movement_speed: 32
        }
    },
    {
        tag: 'moon_shard',
        name: 'Moon Shard',
        description: '<h1>Use: Consume</h1> Consume the Moon Shard to permanently gain 60 attack speed and 200 bonus night vision. Max 1 use.<br />\r\n<h1>Passive: Shade Sight</h1>Grants 400 bonus night vision.',
        notes: "The bonus night vision works during Night Stalker's Darkness ability.",
        lore: 'Said to be a tear from the lunar goddess Selemene.',
        cost: '4000',
        attrib: '+ <span class="attribVal">140</span> <span class="attribValText">Attack Speed</span>',
        category: 'Common',
        components: [
            'item_hyperstone',
            'item_hyperstone'
        ],
        recipeCost: '',
        npc: {
            SideShop: '0'
        },
        bonuses: {
            bonus_attack_speed: 140
        }
    },
    {
        tag: 'ring_of_basilius',
        name: 'Ring of Basilius',
        description: '<h1>Passive: Basilius Aura</h1>Grants 0.75 mana regeneration and 2 armor in a 1200 radius.<br />\r\n<h1>Toggle: Aura</h1>Deactivate aura to stop affecting non-hero units.',
        notes: 'Does not stack with armor auras from Ring of Basilius or Ring of Aquila.<br />Multiple instances of Basilius Aura do not stack.',
        lore: 'Ring given as a reward to the greatest mages.',
        cost: '500',
        attrib: '+ <span class="attribVal">7</span> <span class="attribValText">Damage</span>',
        category: 'Support',
        components: [
            'item_sobi_mask',
            'item_ring_of_protection'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_damage: 7,
            bonus_armor: 0
        }
    },
    {
        tag: 'headdress',
        name: 'Headdress',
        description: '<h1>Passive: Regeneration Aura</h1>Grants 2 health regeneration to allies.<br><br>Radius: 1200',
        notes: 'Multiple instances of Regeneration Aura do not stack.',
        lore: 'Creates a soothing aura that restores allies in battle.',
        cost: '525',
        attrib: '+ <span class="attribVal">2</span> <span class="attribValText">All Attributes</span>',
        category: 'Support',
        components: [
            'item_ring_of_regen',
            'item_branches'
        ],
        recipeCost: '175',
        npc: {

        },
        bonuses: {
            bonus_all_stats: 2
        }
    },
    {
        tag: 'buckler',
        name: 'Buckler',
        description: '<h1>Active: Armor Bonus</h1> Gives +2 armor to all allied units.  Lasts 15 seconds on heroes, 30 seconds on units.<br><br>Radius: 1200',
        notes: '',
        lore: 'A powerful shield that imbues the bearer with the strength of heroes past, it is capable of protecting entire armies in battle.',
        cost: '800',
        manacost: '10',
        cooldown: '25.0',
        attrib: '+ <span class="attribVal">5</span> <span class="attribValText">Armor</span><br />\n+ <span class="attribVal">2</span> <span class="attribValText">All Attributes</span>',
        category: 'Support',
        components: [
            'item_chainmail',
            'item_branches'
        ],
        recipeCost: '200',
        npc: {

        },
        bonuses: {
            bonus_armor: 5,
            bonus_all_stats: 2
        }
    },
    {
        tag: 'urn_of_shadows',
        name: 'Urn of Shadows',
        description: '<h1>Active: Soul Release</h1> Provides 30 health regeneration when cast on allies, and deals 25 damage per second when cast on enemies. <br><br>Lasts 8 seconds.  <br><br>Gains charges every time an enemy hero dies within 1400 units.  Only the closest Urn to the dying hero will gain a charge.<br><br>Cast Range: 950',
        notes: 'Empty urns gain 2 charges.<br />If used on a hero with Soul Release already active on them, it will refresh its duration.',
        lore: 'Contains the ashes of powerful demons.',
        cost: '875',
        cooldown: '7.0',
        attrib: '+ <span class="attribVal">1.5</span> <span class="attribValText">Mana Regeneration</span><br />\n+ <span class="attribVal">2</span> <span class="attribValText">All Attributes</span><br />\n+ <span class="attribVal">2</span> <span class="attribValText">Armor</span>',
        category: 'Support',
        components: [
            'item_infused_raindrop',
            'item_circlet',
            'item_ring_of_protection'
        ],
        recipeCost: '310',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_NEVER'
        },
        bonuses: {
            bonus_armor: 2,
            bonus_all_stats: 2
        }
    },
    {
        tag: 'tranquil_boots',
        name: 'Tranquil Boots',
        description: '<h1>Passive: Break</h1> Whenever you attack a hero or are attacked by any unit, the bonus 16 HP regen is lost and the movement speed bonus is reduced to 18% for 13 seconds.<br />\r\nFlat movement speed bonuses from multiple pairs of boots do not stack.',
        notes: '',
        lore: 'While they increase the longevity of the wearer, this boot is not particularly reliable.',
        cost: '1050',
        manacost: '0',
        cooldown: '13.0',
        attrib: '+ <span class="attribVal">26%</span> <span class="attribValText">Movement Speed</span><br />\n+ <span class="attribVal">16</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Support',
        components: [
            'item_boots',
            'item_wind_lace',
            'item_ring_of_regen'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_armor: 0,
            bonus_movement_speed: 26,
            bonus_health_regen: 16
        }
    },
    {
        tag: 'medallion_of_courage',
        name: 'Medallion of Courage',
        description: '<h1>Active: Valor</h1> If cast on an ally, grants them the 7 armor, and removing it from the caster. <br><br>If cast on an enemy, reduces 7 armor on both the enemy and the caster. <br><br>Cannot target magic immune enemies.<br><br>Range: 1000',
        notes: '',
        lore: 'The bearer has no fear of combat.',
        cost: '1175',
        cooldown: '7.0',
        attrib: '+ <span class="attribVal">7</span> <span class="attribValText">Armor</span><br />\n+ <span class="attribVal">0.75</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Support',
        components: [
            'item_chainmail',
            'item_sobi_mask',
            'item_blight_stone'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_armor: 7,
            bonus_mana_regen_pct: 0.75
        }
    },
    {
        tag: 'arcane_boots',
        name: 'Arcane Boots',
        description: '<h1>Active: Replenish Mana</h1>Restores 160 mana to all nearby allies.<br><br>Radius: 1200<br />\r\nFlat movement speed bonuses from multiple pairs of boots do not stack.',
        notes: 'Does not work on Meepo clones.',
        lore: 'Magi equipped with these boots are valued in battle.',
        cost: '1400',
        manacost: '0',
        cooldown: '55.0',
        attrib: '+ <span class="attribVal">15%</span> <span class="attribValText">Movement Speed</span><br />\n+ <span class="attribVal">250</span> <span class="attribValText">Mana</span>',
        category: 'Support',
        components: [
            'item_boots',
            'item_energy_booster'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_mana: 250
        }
    },
    {
        tag: 'ancient_janggo',
        name: 'Drum of Endurance',
        description: '<h1>Active: Endurance</h1> Gives +35 attack speed and +13% movement speed to nearby allies for 6 seconds. <br><br>Radius: 1200<br />\r\n<h1>Passive: Swiftness Aura</h1>Gives %bonus_aura_movement_speed% movement speed to nearby allies. <br><br>Radius: 1200',
        notes: 'Re-purchasing the Drum of Endurance recipe will refresh its charges.<br />Multiple instances of Swiftness Aura do not stack.',
        lore: 'A relic that enchants the bodies of those around it for swifter movement in times of crisis.',
        cost: '1625',
        cooldown: '30.0',
        attrib: '+ <span class="attribVal">6</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">1.5</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Support',
        components: [
            'item_sobi_mask',
            'item_crown',
            'item_wind_lace'
        ],
        recipeCost: '600',
        npc: {

        },
        bonuses: {
            bonus_movement_speed: 20,
            bonus_mana_regen: 1.5
        }
    },
    {
        tag: 'vladmir',
        name: "Vladmir's Offering",
        description: "<h1>Passive: Vladmir's Aura</h1>Grants lifesteal (15% for melee heroes, 10% for ranged), %hp_regen% health regeneration, 1.75 mana regeneration, 15% bonus attack damage, and 4 armor to nearby allies. <br><br>Radius: 1200",
        notes: "Multiple instances of Vladmir's Aura do not stack.",
        lore: 'An eerie mask that is haunted with the malice of a fallen vampire.',
        cost: '1925',
        attrib: '',
        category: 'Support',
        components: [
            'item_ring_of_basilius',
            'item_lifesteal'
        ],
        recipeCost: '525',
        npc: {

        },
        bonuses: {

        }
    },
    {
        tag: 'mekansm',
        name: 'Mekansm',
        description: '<h1>Active: Restore</h1>Heals 275 health and gives +2 armor to allied units in a 1200 radius.<br />\r\n<h1>Passive: Mekansm Aura</h1>Grants 4.5 health regeneration to allied units in a 1200 radius.',
        notes: 'Restore does not affect units that have been affected by Restore in the last 25 seconds.<br />Multiple instances of Mekansm Aura do not stack.',
        lore: 'A glowing jewel formed out of assorted parts that somehow fit together perfectly.',
        cost: '2275',
        manacost: '225',
        cooldown: '65.0',
        attrib: '+ <span class="attribVal">5</span> <span class="attribValText">All Attributes</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">Armor</span>',
        category: 'Support',
        components: [
            'item_headdress',
            'item_buckler'
        ],
        recipeCost: '950',
        npc: {

        },
        bonuses: {
            bonus_armor: 5,
            bonus_all_stats: 5
        }
    },
    {
        tag: 'spirit_vessel',
        name: 'Spirit Vessel',
        description: '<h1>Active: Soul Release</h1> When used against enemies, it reduces health by 5% of current health per second, and reduces HP regeneration and healing by 70%. Deals 25 damage per second. <br><br>When used on allies, it provides 30 health regeneration per second. <br><br>Lasts 8 seconds.  <br><br>Gains charges every time an enemy hero dies within 1400 units.  Only the closest Spirit Vessel to the dying hero will gain a charge.<br><br>Cast Range: 950 ',
        notes: '',
        lore: 'Forged by a god to entrap the soul of another.',
        cost: '2975',
        cooldown: '7.0',
        attrib: '+ <span class="attribVal">250</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">20%</span> <span class="attribValText">Movement Speed</span><br />\n+ <span class="attribVal">1.5</span> <span class="attribValText">Mana Regeneration</span><br />\n+ <span class="attribVal">2</span> <span class="attribValText">All Attributes</span><br />\n+ <span class="attribVal">2</span> <span class="attribValText">Armor</span>',
        category: 'Support',
        components: [
            'item_urn_of_shadows',
            'item_vitality_booster',
            'item_wind_lace'
        ],
        recipeCost: '750',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_NEVER'
        },
        bonuses: {
            bonus_armor: 2,
            bonus_movement_speed: 20,
            bonus_health: 250,
            bonus_mana_regen: 1.5,
            bonus_all_stats: 2
        }
    },
    {
        tag: 'holy_locket',
        name: 'Holy Locket',
        description: '<h1>Passive: Holy Blessing</h1>Amplifies heals and regeneration you provided by 25%.',
        notes: '',
        lore: '',
        cost: '2700',
        attrib: '+ <span class="attribVal">200</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">4</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">15%</span> <span class="attribValText">Magic Resistance</span>',
        category: 'Support',
        components: [
            'item_ring_of_tarrasque',
            'item_energy_booster',
            'item_cloak'
        ],
        recipeCost: '550',
        npc: {

        },
        bonuses: {
            bonus_health: 200,
            bonus_mana: 325
        }
    },
    {
        tag: 'pipe',
        name: 'Pipe of Insight',
        description: '<h1>Active: Barrier</h1>Gives a shield that blocks 400 magic damage to all nearby allies. Lasts 12 seconds.<br><br>Radius: 1200<br />\r\n<h1>Passive: Insight Aura</h1> Gives allied units 3 health regeneration and 10% magic resistance.<br><br>Radius: 1200',
        notes: 'Multiple instances of Barrier do not stack.<br />Stacks multiplicatively with other sources of magic resistance.',
        lore: 'A powerful artifact of mysterious origin, it creates barriers against magical forces.',
        cost: '3025',
        manacost: '100',
        cooldown: '60.0',
        attrib: '+ <span class="attribVal">8</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">30%</span> <span class="attribValText">Magic Resistance</span><br />\n+ <span class="attribVal">2</span> <span class="attribValText">All Attributes</span>',
        category: 'Support',
        components: [
            'item_hood_of_defiance',
            'item_headdress'
        ],
        recipeCost: '800',
        npc: {

        },
        bonuses: {
            bonus_all_stats: 2
        }
    },
    {
        tag: 'guardian_greaves',
        name: 'Guardian Greaves',
        description: "<h1>Active: Mend</h1>Restores 300 health and 200 mana to nearby allies, and removes most negative effects from the caster.<br><br>Radius: 1200<br>Dispel Type: <span class=\"GameplayValues GameplayVariable\">Basic Dispel</span><br />\r\n<h1>Passive: Guardian Aura</h1> Provides nearby allies with 4.5 health regeneration and 2 bonus armor. If an allied hero's health falls below 20%, they receive 16 health regeneration and 15 armor.<br />\r\nFlat movement speed bonuses from multiple pairs of boots do not stack.",
        notes: 'The aura boost only applies to heroes.',
        lore: 'One of many holy instruments constructed to honor the Omniscience.',
        cost: '5375',
        manacost: '0',
        cooldown: '40',
        attrib: '+ <span class="attribVal">17%</span> <span class="attribValText">Movement Speed</span><br />\n+ <span class="attribVal">250</span> <span class="attribValText">Mana</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">All Attributes</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">Armor</span>',
        category: 'Support',
        components: [
            'item_mekansm',
            'item_arcane_boots'
        ],
        recipeCost: '1700',
        npc: {

        },
        bonuses: {
            bonus_armor: 5,
            bonus_mana: 250,
            bonus_all_stats: 5
        }
    },
    {
        tag: 'glimmer_cape',
        name: 'Glimmer Cape',
        description: '<h1>Active: Glimmer</h1> After a 0.6 second delay, grants invisibility and 45% magic resistance to you or a target allied unit for 5 seconds.<br><br>Range: 800<br><br>Can be cast while channelling.',
        notes: '',
        lore: 'The stolen cape of a master illusionist.',
        cost: '1950',
        manacost: '90',
        cooldown: '14.0',
        attrib: '+ <span class="attribVal">20</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">15%</span> <span class="attribValText">Magic Resistance</span>',
        category: 'Caster',
        components: [
            'item_shadow_amulet',
            'item_cloak'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_magical_armor: 15,
            bonus_attack_speed: 20
        }
    },
    {
        tag: 'veil_of_discord',
        name: 'Veil of Discord',
        description: '<h1>Active: Magic Weakness</h1> Cast a 600 radius blast that decreases enemy magic resistance by 25%.<br><br>Range: 1000<br>Duration: 16 seconds.',
        notes: '',
        lore: 'The headwear of corrupt magi.',
        cost: '2050',
        manacost: '50',
        cooldown: '20',
        attrib: '+ <span class="attribVal">6</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">Armor</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">15</span> <span class="attribValText">Intelligence</span>',
        category: 'Caster',
        components: [
            'item_helm_of_iron_will',
            'item_crown'
        ],
        recipeCost: '700',
        npc: {

        },
        bonuses: {
            bonus_armor: 6,
            bonus_health_regen: 6
        }
    },
    {
        tag: 'aether_lens',
        name: 'Aether Lens',
        description: '<h1>Passive: Aethereal Focus</h1> Increases targeted spell and item cast range by 250.',
        notes: 'Passive does not stack.',
        lore: 'Polished with the incantation of his final breath, the gift of a dying mage to his sickly son.',
        cost: '2350',
        attrib: '+ <span class="attribVal">450</span> <span class="attribValText">Mana</span><br />\n+ <span class="attribVal">3</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Caster',
        components: [
            'item_energy_booster',
            'item_void_stone'
        ],
        recipeCost: '600',
        npc: {

        },
        bonuses: {
            bonus_mana: 450,
            bonus_mana_regen: 3
        }
    },
    {
        tag: 'force_staff',
        name: 'Force Staff',
        description: '<h1>Active: Force</h1>Pushes any target unit 600 units in the direction it is facing.<br><br>Range: 750',
        notes: "Self-cast will cause you to use Force on yourself.<br />Force Staff doesn't interrupt the target's actions.<br />Will not work on a unit inside Chronosphere, Duel, or Black Hole.",
        lore: 'Allows you to manipulate others, for good or evil.',
        cost: '2250',
        manacost: '100',
        cooldown: '23.0',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">2.5</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Caster',
        components: [
            'item_staff_of_wizardry',
            'item_ring_of_regen'
        ],
        recipeCost: '950',
        npc: {

        },
        bonuses: {
            bonus_health_regen: 2.5,
            bonus_intellect: 10
        }
    },
    {
        tag: 'necronomicon',
        name: 'Necronomicon',
        description: '<h1>Active: Demonic Summoning</h1>Summons a Warrior and an Archer to fight for you for 60 seconds.<br><br><h1>Warrior:</h1>Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.<br>Health: 700<br>Damage: 75<br>Mana Break Damage: 30<br>Last Will Damage: 600<br><br><h1>Archer:</h1>Has a passive movement and attack speed aura. Gains Purge at Level 3.<br>Health: 700<br>Damage: 60<br>Aura Move Speed: 5<br>Aura Attack Speed: 5<br>Aura Radius: 1200',
        notes: '',
        lore: 'Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.',
        cost: '2400',
        manacost: '50',
        cooldown: '90.0',
        attrib: '+ <span class="attribVal">10</span>/15/20 <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">2</span>/2.5/3 <span class="attribValText">Mana Regeneration</span>',
        category: 'Caster',
        components: [
            'item_sobi_mask',
            'item_sobi_mask',
            'item_belt_of_strength'
        ],
        recipeCost: '1300',
        npc: {
            UpgradeRecipe: 'item_recipe_necronomicon'
        },
        bonuses: {
            bonus_mana_regen: [
                2,
                2.5,
                3
            ],
            bonus_strength: [
                10,
                15,
                20
            ]
        }
    },
    {
        tag: 'solar_crest',
        name: 'Solar Crest',
        description: '<h1>Active: Shine</h1>When cast on an ally, grants them 12 armor, 70 attack speed, and 10% movement speed. When cast on an enemy, removes 12 armor, 70 attack speed, and 10% movement speed.<br><br>Removes the armor from the caster when used. <br><br> Cannot target magic immune enemies.<br><br>Range: 1000',
        notes: '',
        lore: 'A talisman forged to honor the daytime sky.',
        cost: '3875',
        cooldown: '7.0',
        attrib: '+ <span class="attribVal">12</span> <span class="attribValText">Armor</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">All Attributes</span><br />\n+ <span class="attribVal">20%</span> <span class="attribValText">Movement Speed</span><br />\n+ <span class="attribVal">1.5</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Caster',
        components: [
            'item_medallion_of_courage',
            'item_ultimate_orb',
            'item_wind_lace'
        ],
        recipeCost: '300',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_armor: 12,
            bonus_mana_regen_pct: 1.5,
            bonus_all_stats: 10
        }
    },
    {
        tag: 'dagon',
        name: 'Dagon',
        description: '<h1>Active: Energy Burst</h1> Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.<br><br>Damage: 400<br>Range: 600<br>Mana Cost: 120',
        notes: 'Instantly kills illusions.',
        lore: 'A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.',
        cost: '2700',
        manacost: '120 140 160 180 200',
        cooldown: '35.0 30.0 25.0 20.0 15.0',
        attrib: '+ <span class="attribVal">13</span>/16/19/22/25 <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal"><span class="attribVal">5</span></span> <span class="attribValText">All Attributes</span>',
        category: 'Caster',
        components: [
            'item_staff_of_wizardry',
            'item_crown'
        ],
        recipeCost: '1250',
        npc: {
            UpgradeRecipe: 'item_recipe_dagon'
        },
        bonuses: {
            bonus_intellect: [
                13,
                16,
                19,
                22,
                25
            ],
            bonus_all_stats: 5
        }
    },
    {
        tag: 'cyclone',
        name: "Eul's Scepter of Divinity",
        description: '<h1>Active: Cyclone</h1> Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can only be cast on enemy units or yourself.<br><br>Enemy units take 50 magical damage upon landing.<br><br>Range: 575<br>Dispel Type: <span class="GameplayValues GameplayVariable">Basic Dispel</span>',
        notes: 'You cannot cyclone allies.<br />Cyclones cast on yourself go through spell immunity.<br />Cyclone can purge some buffs and debuffs.',
        lore: 'A mysterious scepter passed down through the ages, its disruptive winds can be used for good or evil.',
        cost: '2750',
        manacost: '175',
        cooldown: '23.0',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">Mana Regeneration</span><br />\n+ <span class="attribVal">20%</span> <span class="attribValText">Movement Speed</span>',
        category: 'Caster',
        components: [
            'item_staff_of_wizardry',
            'item_void_stone',
            'item_wind_lace'
        ],
        recipeCost: '650',
        npc: {

        },
        bonuses: {
            bonus_movement_speed: 20,
            bonus_mana_regen: 5,
            bonus_intellect: 10
        }
    },
    {
        tag: 'rod_of_atos',
        name: 'Rod of Atos',
        description: '<h1>Active: Cripple</h1>Roots the target for 2 seconds.<br><br>Range: 1150',
        notes: '',
        lore: 'Atos, the Lord of Blight, has his essence stored in this deceptively simple wand.',
        cost: '2750',
        manacost: '50',
        cooldown: '16',
        attrib: '+ <span class="attribVal">20</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Agility</span>',
        category: 'Caster',
        components: [
            'item_staff_of_wizardry',
            'item_crown',
            'item_crown'
        ],
        recipeCost: '850',
        npc: {

        },
        bonuses: {
            bonus_strength: 12,
            bonus_agility: 12,
            bonus_intellect: 20
        }
    },
    {
        tag: 'orchid',
        name: 'Orchid Malevolence',
        description: '<h1>Active: Soul Burn</h1>Silences the target unit for 5 seconds. At the end of the silence, 30% of the damage received while silenced is inflicted as bonus magical damage.<br><br>Range: 900',
        notes: '',
        lore: 'A garnet rod constructed from the essence of a fire demon.',
        cost: '4075',
        manacost: '100',
        cooldown: '18.0',
        attrib: '+ <span class="attribVal">25</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">30</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">30</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">5.5</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Caster',
        components: [
            'item_oblivion_staff',
            'item_oblivion_staff'
        ],
        recipeCost: '775',
        npc: {

        },
        bonuses: {
            bonus_damage: 30,
            bonus_attack_speed: 30,
            bonus_mana_regen: 5.5,
            bonus_intellect: 25
        }
    },
    {
        tag: 'ultimate_scepter',
        name: "Aghanim's Scepter",
        description: '<h1>Passive: Ultimate Upgrade</h1>Upgrades the ultimate, and some abilities, of certain heroes.',
        notes: '',
        lore: 'The scepter of a wizard with demigod-like powers.',
        cost: '4200',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">All Attributes</span><br />\n+ <span class="attribVal">175</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">175</span> <span class="attribValText">Mana</span>',
        category: 'Caster',
        components: [
            'item_point_booster',
            'item_staff_of_wizardry',
            'item_ogre_axe',
            'item_blade_of_alacrity'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_health: 175,
            bonus_mana: 175,
            bonus_all_stats: 10
        }
    },
    {
        tag: 'nullifier',
        name: 'Nullifier',
        description: '<h1>Active: Nullify</h1> Dispels the target and mutes them for 6 seconds. Anytime the muted target is attacked, it will be slowed by 100% for 0.4 seconds.<br><br>Dispel Type: <span class="GameplayValues GameplayVariable">Basic Dispel</span>',
        notes: '',
        lore: 'A dangerous weapon pilfered from an inverse dimension.',
        cost: '4700',
        manacost: '75',
        cooldown: '13.0',
        attrib: '+ <span class="attribVal">65</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">Armor</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Caster',
        components: [
            'item_relic',
            'item_helm_of_iron_will'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 65,
            bonus_armor: 5
        }
    },
    {
        tag: 'refresher',
        name: 'Refresher Orb',
        description: '<h1>Active: Reset Cooldowns</h1>Resets the cooldowns of all your items and abilities.',
        notes: '',
        lore: 'A powerful artifact created for wizards.',
        cost: '5100',
        manacost: '375',
        cooldown: '195.0',
        attrib: '+ <span class="attribVal">13</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Caster',
        components: [
            'item_pers',
            'item_pers'
        ],
        recipeCost: '1700',
        npc: {

        },
        bonuses: {
            bonus_health_regen: 13,
            bonus_mana_regen: 12
        }
    },
    {
        tag: 'sheepstick',
        name: 'Scythe of Vyse',
        description: '<h1>Active: Hex</h1>Turns a target unit into a harmless critter for 3.5 seconds. The target has a base movement speed of 140 and will be silenced, muted, and disarmed.<br>Instantly destroys illusions.<br><br>Range: 800',
        notes: "The target will have a base movement speed of 140, but buffs granting maximum movement speed won't be disabled.",
        lore: 'The most guarded relic among the cult of Vyse, it is the most coveted weapon among magi.',
        cost: '5700',
        manacost: '250',
        cooldown: '22.0',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">35</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">9</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Caster',
        components: [
            'item_mystic_staff',
            'item_ultimate_orb',
            'item_void_stone'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_mana_regen: 9,
            bonus_strength: 10,
            bonus_agility: 10,
            bonus_intellect: 35
        }
    },
    {
        tag: 'octarine_core',
        name: 'Octarine Core',
        description: '<h1>Passive: Cooldown Reduction</h1>Reduces the cooldown time of all spells and items by 25%.<br />\r\n<h1>Passive: Spell Lifesteal</h1>25% of spell damage dealt to enemy heroes is returned to the caster as health, regardless of spell damage type.  <br><br>Lifesteal reduced to 5% against creeps.',
        notes: '',
        lore: 'At the core of spellcraft are spectrums only the very gifted can sense.',
        cost: '5900',
        attrib: '+ <span class="attribVal">25</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">425</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">425</span> <span class="attribValText">Mana</span>',
        category: 'Caster',
        components: [
            'item_mystic_staff',
            'item_soul_booster'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_health: 425,
            bonus_mana: 425
        }
    },
    {
        tag: 'lesser_crit',
        name: 'Crystalys',
        description: '<h1>Passive: Critical Strike</h1>Grants each attack a 20% chance to deal 175% damage.',
        notes: 'Critical Strike does not work against buildings.',
        lore: 'A blade forged from rare crystals, it seeks weak points in enemy armor.',
        cost: '2130',
        attrib: '+ <span class="attribVal">38</span> <span class="attribValText">Damage</span>',
        category: 'Weapons',
        components: [
            'item_broadsword',
            'item_blades_of_attack'
        ],
        recipeCost: '500',
        npc: {

        },
        bonuses: {
            bonus_damage: 38
        }
    },
    {
        tag: 'armlet',
        name: 'Armlet of Mordiggian',
        description: '<h1>Toggle: Unholy Strength</h1>When active, Unholy Strength grants +31 damage, +25 strength and +4 armor, but drains 54 health per second.<br><br> You cannot die from the health drain when Unholy Strength is activated, nor from the strength loss when Unholy Strength is deactivated.',
        notes: 'The strength change will affect both maximum and current HP, but you cannot die from the change.<br />The strength change occurs over 0.6 seconds.<br />Activating or deactivating Unholy Strength does not interrupt channeling.',
        lore: 'Weapon of choice among brutes, the bearer sacrifices his life energy to gain immense strength and power.',
        cost: '2380',
        cooldown: '0.0',
        attrib: '+ <span class="attribVal">9</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">25</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">Armor</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Weapons',
        components: [
            'item_helm_of_iron_will',
            'item_gloves',
            'item_blades_of_attack'
        ],
        recipeCost: '550',
        npc: {

        },
        bonuses: {
            bonus_damage: 9,
            bonus_armor: 5,
            bonus_attack_speed: 25,
            bonus_health_regen: 5
        }
    },
    {
        tag: 'meteor_hammer',
        name: 'Meteor Hammer',
        description: '<h1>Active: Meteor Hammer</h1> CHANNELED - After a successful channel, summons a meteor that strikes a 315 AoE, stunning enemies for 2 seconds and dealing impact damage. Continues to deal damage over time to enemies units and buildings for 6 seconds.<BR><BR>Building Impact Damage: 75 <BR>Building Over Time Damage: 50 <BR><BR>Non-Building Impact Damage: 150 <BR>Non-Building Over Time Damage: 90 <BR><BR>Channel Duration: 2.5 seconds.<BR>Landing Time: 0.5 seconds.',
        notes: '',
        lore: 'An enchanted hammer forged of metals discovered in the ruins of a village destroyed by a great star storm.',
        cost: '2625',
        manacost: '125',
        cooldown: '28',
        attrib: '+ <span class="attribVal">12</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">3</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Weapons',
        components: [
            'item_ogre_axe',
            'item_staff_of_wizardry',
            'item_ring_of_regen',
            'item_sobi_mask'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_health_regen: 5,
            bonus_mana_regen: 3,
            bonus_strength: 12,
            bonus_intellect: 12
        }
    },
    {
        tag: 'invis_sword',
        name: 'Shadow Blade',
        description: '<h1>Active: Shadow Walk</h1>Makes you invisible for 14 seconds, or until you attack or cast a spell.  While Shadow Walk is active, you move 20% faster and can move through units.  <br><br>If attacking to end the invisibility, you gain 175 bonus physical damage on that attack.',
        notes: 'Has a 0.3 second fade time.<br />If the invisibility ends without attacking, the bonus damage is lost.',
        lore: 'The blade of a fallen king, it allows you to move unseen and strike from the shadows.',
        cost: '2800',
        manacost: '75',
        cooldown: '28.0',
        attrib: '+ <span class="attribVal">22</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">30</span> <span class="attribValText">Attack Speed</span>',
        category: 'Weapons',
        components: [
            'item_shadow_amulet',
            'item_claymore'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 22,
            bonus_attack_speed: 30
        }
    },
    {
        tag: 'basher',
        name: 'Skull Basher',
        description: '<h1>Passive: Bash</h1> Grants melee heroes a 25% chance on hit to stun the target for 1.5 seconds and deal 100 bonus magical damage.  Bash chance for ranged heroes is 10%.',
        notes: 'Does not stack with other sources of Bash, however it will stack with Mini-Bash.<br />The following heroes cannot trigger Bash on this item: Spirit Breaker, Faceless Void, and Slardar.',
        lore: "A feared weapon in the right hands, this maul's ability to shatter the defenses of its opponents should not be underestimated.",
        cost: '2950',
        cooldown: '2.3',
        attrib: '+ <span class="attribVal">25</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Strength</span>',
        category: 'Weapons',
        components: [
            'item_mithril_hammer',
            'item_belt_of_strength'
        ],
        recipeCost: '900',
        npc: {

        },
        bonuses: {
            bonus_damage: 25,
            bonus_strength: 10
        }
    },
    {
        tag: 'bfury',
        name: 'Battle Fury',
        description: '<h1>Active: Chop Tree/Ward</h1> Destroy a target tree or ward.<br><br>Tree Cast Range: 350<br>Ward Cast Range: 450 <br />\r\n<h1>Passive: Quell</h1> Increases attack damage against non-hero units by %tooltip_quelling_bonus%% for melee heroes, and %tooltip_quelling_bonus_ranged%% for ranged. <br />\r\n<h1>Passive: Cleave</h1> Deals 60% of attack damage as physical damage in a cone up to 650 around the target. (Melee Only)',
        notes: "Cleave damage is reduced by armor type but not by armor value.<br />Cleave damage goes through spell immunity.<br />If multiple sources of Cleave are present, each Cleave's damage is applied separately.<br />Chop can be used to destroy Techies' Remote Mines.",
        lore: 'The bearer of this mighty axe gains the ability to cut down swaths of enemies at once.',
        cost: '4400',
        cooldown: '4.0',
        attrib: '+ <span class="attribVal">45</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">7.5</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">3.75</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Weapons',
        components: [
            'item_demon_edge',
            'item_pers',
            'item_quelling_blade'
        ],
        recipeCost: '300',
        npc: {

        },
        bonuses: {
            bonus_damage: 45,
            bonus_health_regen: 7.5,
            bonus_mana_regen: 3.75
        }
    },
    {
        tag: 'monkey_king_bar',
        name: 'Monkey King Bar',
        description: '<h1>Passive: Pierce</h1>Grants each attack a 75% chance to pierce through evasion and deal 100 bonus magical damage.',
        notes: '',
        lore: 'A powerful staff used by a master warrior.',
        cost: '4175',
        attrib: '+ <span class="attribVal">52</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Attack Speed</span>',
        category: 'Weapons',
        components: [
            'item_demon_edge',
            'item_javelin',
            'item_quarterstaff'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 52,
            bonus_attack_speed: 10
        }
    },
    {
        tag: 'ethereal_blade',
        name: 'Ethereal Blade',
        description: '<h1>Active: Ether Blast</h1>Converts the target unit to ethereal form, rendering them immune to physical damage, but unable to attack and 40% more vulnerable to magic damage.  Lasts for 4 seconds on allies and 4 seconds on enemies.<br><br>  Enemy targets are also slowed by 80%, and take 2x your primary attribute + 75 as magical damage.<br><br>Range: 800',
        notes: 'Shares cooldown with Ghost Scepter.<br />Ethereal units take 40% bonus magic damage.<br />Lasts an extra second on Self or Allied cast.<br />Using a Town Portal Scroll or Boots of Travel will not dispel Ethereal Form.',
        lore: 'A flickering blade of a ghastly nature, it is capable of dealing damage in both magical and physical planes.',
        cost: '4700',
        manacost: '100',
        cooldown: '20.0',
        attrib: '+ <span class="attribVal">40</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Intelligence</span>',
        category: 'Weapons',
        components: [
            'item_eagle',
            'item_ghost'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_strength: 10,
            bonus_agility: 40,
            bonus_intellect: 10
        }
    },
    {
        tag: 'radiance',
        name: 'Radiance',
        description: '<h1>Toggle: Burn</h1> When active, scorches enemies for 60 magical damage per second, and causes them to miss 17% of their attacks. Illusions deal 35 magical damage per second.<br><br>Radius: 700',
        notes: '',
        lore: 'A divine weapon that causes damage and a bright burning effect that lays waste to nearby enemies.',
        cost: '5150',
        attrib: '+ <span class="attribVal">65</span> <span class="attribValText">Damage</span>',
        category: 'Weapons',
        components: [
            'item_relic'
        ],
        recipeCost: '1350',
        npc: {

        },
        bonuses: {
            bonus_damage: 65
        }
    },
    {
        tag: 'greater_crit',
        name: 'Daedalus',
        description: '<h1>Passive: Critical Strike</h1>Grants each attack a 30% chance to deal 235% damage.',
        notes: 'Critical Strike does not work against buildings.',
        lore: 'A weapon of incredible power that is difficult for even the strongest of warriors to control.',
        cost: '5330',
        attrib: '+ <span class="attribVal">80</span> <span class="attribValText">Damage</span>',
        category: 'Weapons',
        components: [
            'item_lesser_crit',
            'item_demon_edge'
        ],
        recipeCost: '1000',
        npc: {

        },
        bonuses: {
            bonus_damage: 80
        }
    },
    {
        tag: 'butterfly',
        name: 'Butterfly',
        description: '',
        notes: 'Stacks diminishingly with other sources of Evasion.',
        lore: 'Only the mightiest and most experienced of warriors can wield the Butterfly, but it provides incredible dexterity in combat.',
        cost: '5475',
        attrib: '+ <span class="attribVal">35</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">25</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">35%</span> <span class="attribValText">Evasion</span><br />\n+ <span class="attribVal">30</span> <span class="attribValText">Attack Speed</span>',
        category: 'Weapons',
        components: [
            'item_eagle',
            'item_talisman_of_evasion',
            'item_quarterstaff'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 25,
            bonus_attack_speed: 30,
            bonus_agility: 35
        }
    },
    {
        tag: 'silver_edge',
        name: 'Silver Edge',
        description: '<h1>Active: Shadow Walk</h1>Makes you invisible for 14 seconds, or until you attack or cast a spell.  While invisible, you move 25% faster and can move through units.  <br><br>Attacking to end the invisibility will deal 175 bonus physical damage to the target, and for 4 seconds, disable their passive abilities.',
        notes: 'Backstab cannot miss.<br />Backstab does not pierce spell immunity.',
        lore: 'Once used to slay an unjust king, only to have the kingdom erupt into civil war in the aftermath.',
        cost: '5550',
        manacost: '75',
        cooldown: '22.0',
        attrib: '+ <span class="attribVal">30</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">30</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">15</span> <span class="attribValText">All Attributes</span>',
        category: 'Weapons',
        components: [
            'item_invis_sword',
            'item_ultimate_orb'
        ],
        recipeCost: '600',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_damage: 30,
            bonus_attack_speed: 30,
            bonus_all_stats: 15
        }
    },
    {
        tag: 'rapier',
        name: 'Divine Rapier',
        description: "<h1>Passive: Everlasting</h1> <font color='#e03e2e'>Dropped on death, and cannot be destroyed.</font> <br><br>Becomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up and is killed. A dropped Rapier cannot be picked up by a courier.",
        notes: 'If Divine Rapier is dropped and picked up by an enemy of its original owner, it cannot be dropped again except by death.',
        lore: 'So powerful, it cannot have a single owner.',
        cost: '6000',
        attrib: '+ <span class="attribVal">330</span> <span class="attribValText">Damage</span>',
        category: 'Weapons',
        components: [
            'item_relic',
            'item_demon_edge'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_NEVER'
        },
        bonuses: {
            bonus_damage: 330
        }
    },
    {
        tag: 'abyssal_blade',
        name: 'Abyssal Blade',
        description: '<h1>Active: Overwhelm</h1> Stuns a target enemy unit for 2 seconds. <br><br>Pierces Spell Immunity.<br><br>Range: 140<br />\r\n<h1>Passive: Bash</h1> Grants melee heroes a 25% chance on hit to stun the target for 1.5 seconds and deal 100 bonus magical damage.  Bash chance for ranged heroes is 10%.<br />\r\n<h1>Passive: Damage Block</h1> Grants a 50% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged.',
        notes: 'The stun is melee range.<br />Does not stack with other bashes.<br />The following heroes cannot trigger Bash on this item: Spirit Breaker, Faceless Void, Slardar, and Troll Warlord.<br />Multiple sources of damage block do not stack.',
        lore: "The lost blade of the Commander of the Abyss, this edge cuts into an enemy's soul.",
        cost: '6650',
        manacost: '75',
        cooldown: '35',
        attrib: '+ <span class="attribVal">25</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">250</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Strength</span>',
        category: 'Weapons',
        components: [
            'item_basher',
            'item_vanguard'
        ],
        recipeCost: '1550',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_damage: 25,
            bonus_health: 250,
            bonus_health_regen: 10,
            bonus_strength: 10
        }
    },
    {
        tag: 'bloodthorn',
        name: 'Bloodthorn',
        description: '<h1>Active: Soul Rend</h1> Silences a target for 5 seconds. At the end of the silence, an additional 30% of all damage taken during the silence will be dealt to the target as magical damage.<br><br>All attacks on the silenced target will have True Strike and 100% chance to crit for 140% damage.<br><br>Range: 900<br />\r\n<h1>Passive: Critical Strike</h1> Grants a 20% chance for attacks to inflict 175% damage.',
        notes: 'Critical Strike does not work against buildings.',
        lore: "A reviled blade that bites deeper with each wriggle of its victim's final throes.",
        cost: '7205',
        manacost: '100',
        cooldown: '15.0',
        attrib: '+ <span class="attribVal">25</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">30</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">68</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">5.5</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Weapons',
        components: [
            'item_orchid',
            'item_lesser_crit'
        ],
        recipeCost: '1000',
        npc: {

        },
        bonuses: {
            bonus_damage: 68,
            bonus_attack_speed: 30,
            bonus_mana_regen: 5.5,
            bonus_intellect: 25
        }
    },
    {
        tag: 'hood_of_defiance',
        name: 'Hood of Defiance',
        description: '<h1>Active: Barrier</h1> Creates a spell shield that absorbs up to 325 magical damage.  Lasts 12 seconds.',
        notes: 'Stacks multiplicatively with other sources of spell resistance.',
        lore: 'A furred, magic resistant headpiece that is feared by wizards.',
        cost: '1700',
        manacost: '75',
        cooldown: '60.0',
        attrib: '+ <span class="attribVal">8</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">25%</span> <span class="attribValText">Magic Resistance</span>',
        category: 'Armor',
        components: [
            'item_ring_of_health',
            'item_cloak',
            'item_ring_of_regen'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_spell_resist: 25,
            bonus_health_regen: 8
        }
    },
    {
        tag: 'vanguard',
        name: 'Vanguard',
        description: '<h1>Passive: Damage Block</h1> Grants a 50% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged.',
        notes: 'Multiple sources of damage block do not stack.',
        lore: 'A powerful shield that defends its wielder from even the most vicious of attacks.',
        cost: '2150',
        attrib: '+ <span class="attribVal">250</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">7</span> <span class="attribValText">HP Regeneration</span>',
        category: 'Armor',
        components: [
            'item_ring_of_health',
            'item_vitality_booster',
            'item_stout_shield'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_health: 250,
            bonus_health_regen: 7
        }
    },
    {
        tag: 'blade_mail',
        name: 'Blade Mail',
        description: '<h1>Active: Damage Return</h1>For 4.5 seconds, duplicates any damage taken back to the unit that dealt the damage.',
        notes: "Damage Return is calculated before any kind of reduction.<br />Damage Return doesn't reflect damage from other forms of Blade Mail.<br />Returned damage type is the same as it was received.<br />Can pierce Spell Immunity if the original damage type does.",
        lore: 'A razor-sharp coat of mail, it is the choice of selfless martyrs in combat.',
        cost: '2200',
        manacost: '25',
        cooldown: '25.0',
        attrib: '+ <span class="attribVal">22</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">Armor</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Intelligence</span>',
        category: 'Armor',
        components: [
            'item_broadsword',
            'item_chainmail',
            'item_robe'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 22,
            bonus_armor: 5,
            bonus_intellect: 10
        }
    },
    {
        tag: 'soul_booster',
        name: 'Soul Booster',
        description: '',
        notes: '',
        lore: 'Regain lost courage.',
        cost: '3200',
        attrib: '+ <span class="attribVal">425</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">425</span> <span class="attribValText">Mana</span>',
        category: 'Armor',
        components: [
            'item_vitality_booster',
            'item_energy_booster',
            'item_point_booster'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_health: 425,
            bonus_mana: 425
        }
    },
    {
        tag: 'crimson_guard',
        name: 'Crimson Guard',
        description: '<h1>Active: Guard</h1> For 12 seconds, grant nearby allied heroes and buildings +2 armor, and a 100% chance to block 60 damage from each incoming attack.<br><br>Units may only be affected by Guard once every 46 seconds.<br><br>Radius: 1200<br />\r\n<h1>Passive: Damage Block</h1> Grants a 50% chance to block 70 damage from incoming attacks on melee heroes, and 35 damage on ranged.',
        notes: 'Multiple sources of damage block do not stack.',
        lore: 'A cuirass originally built to protect against the dreaded Year Beast.',
        cost: '3700',
        cooldown: '46.0',
        attrib: '+ <span class="attribVal">250</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">7</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">2</span> <span class="attribValText">All Attributes</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">Armor</span>',
        category: 'Armor',
        components: [
            'item_vanguard',
            'item_buckler'
        ],
        recipeCost: '750',
        npc: {

        },
        bonuses: {
            bonus_armor: 5,
            bonus_health: 250,
            bonus_health_regen: 7,
            bonus_all_stats: 2
        }
    },
    {
        tag: 'aeon_disk',
        name: 'Aeon Disk',
        description: '<h1>Passive: Combo Breaker</h1> When you take damage and your health falls below 70%, a strong dispel is applied and you gain a 2.5 second buff that provides +75% Status Resistance and causes all damage you deal and are dealt to be reduced to zero. Only triggers on player based damage.',
        notes: '',
        lore: 'A powerful artifact long ago smuggled out of the Ivory Incubarium. Or so many believe.',
        cost: '3250',
        cooldown: '115.0',
        attrib: '+ <span class="attribVal">300</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">300</span> <span class="attribValText">Mana</span>',
        category: 'Armor',
        components: [
            'item_vitality_booster',
            'item_energy_booster'
        ],
        recipeCost: '1250',
        npc: {

        },
        bonuses: {
            bonus_health: 300,
            bonus_mana: 300
        }
    },
    {
        tag: 'black_king_bar',
        name: 'Black King Bar',
        description: '<h1>Active: Avatar</h1> Grants Spell Immunity and 100% Magic Damage Resistance.  Duration decreases with each use. <br><br>Duration: 10 <br>Dispel Type: <span class="GameplayValues GameplayVariable">Basic Dispel</span>',
        notes: 'Purchasing another Black King Bar will not reset its immunity duration.<br />Using Black King Bar may remove some positive buffs.',
        lore: 'A powerful staff imbued with the strength of giants.',
        cost: '4050',
        cooldown: '70',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">24</span> <span class="attribValText">Damage</span>',
        category: 'Armor',
        components: [
            'item_ogre_axe',
            'item_mithril_hammer'
        ],
        recipeCost: '1450',
        npc: {

        },
        bonuses: {
            bonus_damage: 24,
            bonus_strength: 10
        }
    },
    {
        tag: 'lotus_orb',
        name: 'Lotus Orb',
        description: '<h1>Active: Echo Shell</h1>Applies a shield to the target unit for 6 seconds which re-casts most targeted spells back to their caster.<br><br>The shielded unit will still take damage from the spell. <br><br>Range: 900<br>Dispel Type: <span class="GameplayValues GameplayVariable">Basic Dispel</span>',
        notes: '',
        lore: 'The jewel at its center still reflects a pale image of its creator.',
        cost: '4000',
        manacost: '75',
        cooldown: '15.0',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Armor</span><br />\n+ <span class="attribVal">6.5</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">4</span> <span class="attribValText">Mana Regeneration</span><br />\n+ <span class="attribVal">250</span> <span class="attribValText">Mana</span>',
        category: 'Armor',
        components: [
            'item_pers',
            'item_platemail',
            'item_energy_booster'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_armor: 10,
            bonus_health_regen: 6.5,
            bonus_mana: 250,
            bonus_mana_regen: 4
        }
    },
    {
        tag: 'shivas_guard',
        name: "Shiva's Guard",
        description: '<h1>Active: Arctic Blast</h1> Emits a freezing wave that deals 200 magical damage to enemies and slows their movement by 40% for 4 seconds.<br><br>Radius: 900<br />\r\n<h1>Passive: Freezing Aura</h1> Reduces the attack speed of all enemies by 45. <br><br>Radius: 1200',
        notes: 'The wave extends at a speed of 350 to a max size of 900.<br />The Arctic Blast follows its caster.<br />Multiple instances of Freezing Aura do not stack.',
        lore: 'Said to have belonged to a goddess, today it retains much of its former power.',
        cost: '4750',
        manacost: '100',
        cooldown: '30',
        attrib: '+ <span class="attribVal">30</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">15</span> <span class="attribValText">Armor</span>',
        category: 'Armor',
        components: [
            'item_platemail',
            'item_mystic_staff'
        ],
        recipeCost: '650',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_armor: 15,
            bonus_intellect: 30
        }
    },
    {
        tag: 'hurricane_pike',
        name: 'Hurricane Pike',
        description: "<h1>Active: Hurricane Thrust</h1> Pushes you and target enemy 450 units away from each other, and for 5 seconds, allows you to make 4 attacks against the target without range restrictions and with +100 attack speed.<br><br>Works like Force Staff when used on self or allies.<br><br>Allied Range: 800<br>Enemy Range: 400<br />\r\n<h1>Passive:  Dragon's Reach</h1> Increases attack range of ranged heroes by 140.",
        notes: "Self-cast will use Hurricane Pike on yourself.<br />Hurricane Pike doesn't interrupt the target's actions.<br />Will not work on a unit inside Chronosphere, Duel, or Black Hole.",
        lore: 'A legendary pike once held as royal sigil of the ancient wyvern riders.',
        cost: '4600',
        manacost: '100',
        cooldown: '23.0',
        attrib: '+ <span class="attribVal">13</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">2.5</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">20</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">15</span> <span class="attribValText">Strength</span>',
        category: 'Armor',
        components: [
            'item_force_staff',
            'item_dragon_lance'
        ],
        recipeCost: '450',
        npc: {

        },
        bonuses: {
            bonus_attack_speed: 100,
            bonus_health_regen: 2.5,
            bonus_strength: 15,
            bonus_agility: 20,
            bonus_intellect: 13
        }
    },
    {
        tag: 'sphere',
        name: "Linken's Sphere",
        description: "<h1>Passive: Spellblock</h1>Blocks most targeted spells once every 13 seconds.<br />\r\n<h1>Active: Transfer Spellblock</h1>Temporarily removes Spellblock from the item's owner and transfers it to an allied unit for 13 seconds.<br><br>Range: 700",
        notes: '',
        lore: 'This magical sphere once protected one of the most famous heroes in history.',
        cost: '5050',
        cooldown: '13.0',
        attrib: '+ <span class="attribVal">13</span> <span class="attribValText">All Attributes</span><br />\n+ <span class="attribVal">6.5</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">5</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Armor',
        components: [
            'item_ultimate_orb',
            'item_pers'
        ],
        recipeCost: '1200',
        npc: {

        },
        bonuses: {
            bonus_health_regen: 6.5,
            bonus_mana_regen: 5,
            bonus_all_stats: 13
        }
    },
    {
        tag: 'bloodstone',
        name: 'Bloodstone',
        description: '<h1>Active: Bloodpact</h1> Converts 30% of your current mana to health regeneration over 2 seconds.<br />\r\n <h1>Passive: Mana Battery</h1>Each charge provides 0.3 HP and MP regen. Nearby kills provide 1 charges. Dying causes you to lose 3 charges. Starts with 14 charges.',
        notes: '',
        lore: "The Bloodstone's bright ruby color is unmistakable on the battlefield, as the owner seems to have infinite vitality and spirit.",
        cost: '4900',
        cooldown: '250.0',
        attrib: '+ <span class="attribVal">475</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">425</span> <span class="attribValText">Mana</span><br />\n+ <span class="attribVal">6</span> <span class="attribValText">HP Regeneration</span><br />\n+ <span class="attribVal">3</span> <span class="attribValText">Mana Regeneration</span><br />\n+Mana Regeneration <span class="attribVal">200%</span>',
        category: 'Armor',
        components: [
            'item_pers',
            'item_soul_booster'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_health: 475,
            bonus_health_regen: 6,
            bonus_mana: 425,
            bonus_mana_regen: 3
        }
    },
    {
        tag: 'manta',
        name: 'Manta Style',
        description: '<h1>Active: Mirror Image</h1>Creates 2 images of your hero that last 20 seconds. <br><br>Melee images deal 33% damage and take 350% damage, while Ranged images deal 28% and take 400% damage. <br><br>Cooldown increased by 15 seconds on ranged heroes.<br><br>Dispel Type: <span class="GameplayValues GameplayVariable">Basic Dispel</span>',
        notes: 'Has a 0.1 second cast time during which you are invulnerable.<br />Many effects are removed upon using Manta.<br />Yasha based movement speed bonuses from multiple items do not stack.',
        lore: 'An axe made of reflective materials that causes confusion amongst enemy ranks.',
        cost: '4700',
        manacost: '125',
        cooldown: '45.0',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">26</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">20%</span> <span class="attribValText">Movement Speed</span>',
        category: 'Armor',
        components: [
            'item_yasha',
            'item_ultimate_orb'
        ],
        recipeCost: '500',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_movement_speed: 20,
            bonus_attack_speed: 12,
            bonus_strength: 10,
            bonus_agility: 26,
            bonus_intellect: 10
        }
    },
    {
        tag: 'heart',
        name: 'Heart of Tarrasque',
        description: '<h1>Passive: Health Regeneration</h1>Restores 5% of max health per second. <br><br>If damage is taken from an enemy hero or Roshan, this ability is disabled for 5 seconds for melee heroes, or 7 seconds for ranged heroes.',
        notes: '',
        lore: "Preserved heart of an extinct monster, it bolsters the bearer's fortitude.",
        cost: '5200',
        cooldown: '7.0',
        attrib: '+ <span class="attribVal">45</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">400</span> <span class="attribValText">Health</span><br />\n+Health Regen Amplification <span class="attribVal">50%</span>',
        category: 'Armor',
        components: [
            'item_ring_of_tarrasque',
            'item_vitality_booster',
            'item_reaver'
        ],
        recipeCost: '400',
        npc: {

        },
        bonuses: {
            bonus_health: 400,
            bonus_strength: 45
        }
    },
    {
        tag: 'assault',
        name: 'Assault Cuirass',
        description: '<h1>Passive: Assault Aura</h1> Grants 25 attack speed and 5 armor to nearby allied units and structures, and decreases nearby enemy unit and structure armor by 5.<br><br>Radius: 1200',
        notes: 'Multiple instances of Assault Aura do not stack.',
        lore: 'Forged in the depths of the nether reaches, this hellish mail provides an army with increased armor and attack speed.',
        cost: '5250',
        attrib: '+ <span class="attribVal">30</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Armor</span>',
        category: 'Armor',
        components: [
            'item_platemail',
            'item_hyperstone',
            'item_chainmail'
        ],
        recipeCost: '1300',
        npc: {

        },
        bonuses: {
            bonus_armor: 10,
            bonus_attack_speed: 30
        }
    },
    {
        tag: 'dragon_lance',
        name: 'Dragon Lance',
        description: "<h1>Passive: Dragon's Reach</h1> Increases attack range of ranged heroes by 140.",
        notes: 'Passive does not stack.',
        lore: 'The forward charge of the wyvern host grants no quarter.',
        cost: '1900',
        attrib: '+ <span class="attribVal">12</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Strength</span>',
        category: 'Artifacts',
        components: [
            'item_ogre_axe',
            'item_boots_of_elves',
            'item_boots_of_elves'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_strength: 12,
            bonus_agility: 12
        }
    },
    {
        tag: 'sange',
        name: 'Sange',
        description: '',
        notes: '',
        lore: 'Sange is an unusually accurate weapon, seeking weak points automatically.',
        cost: '2050',
        attrib: '+ <span class="attribVal">16</span> <span class="attribValText">Strength</span><br />\n+Status Resistance <span class="attribVal">12%</span><br />\n+ <span class="attribVal">8</span> <span class="attribValText">Damage</span>',
        category: 'Artifacts',
        components: [
            'item_ogre_axe',
            'item_belt_of_strength'
        ],
        recipeCost: '600',
        npc: {

        },
        bonuses: {
            bonus_damage: 8,
            bonus_strength: 16
        }
    },
    {
        tag: 'yasha',
        name: 'Yasha',
        description: '',
        notes: 'Yasha-based movement speed bonuses from multiple items do not stack.',
        lore: 'Yasha is regarded as the swiftest weapon ever created.',
        cost: '2050',
        attrib: '+ <span class="attribVal">16</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">20%</span> <span class="attribValText">Movement Speed</span>',
        category: 'Artifacts',
        components: [
            'item_blade_of_alacrity',
            'item_boots_of_elves'
        ],
        recipeCost: '600',
        npc: {

        },
        bonuses: {
            bonus_attack_speed: 12,
            bonus_agility: 16
        }
    },
    {
        tag: 'kaya',
        name: 'Kaya',
        description: '',
        notes: 'Multiple instances of this item do not stack.',
        lore: 'The staff of a renowned sorceress, lost for countless millennia.',
        cost: '2050',
        attrib: '+ <span class="attribVal">16</span> <span class="attribValText">Intelligence</span><br />\n+Manacost and Manaloss Reduction <span class="attribVal">12%</span><br />\n+Spell Amplification <span class="attribVal">8%</span>',
        category: 'Artifacts',
        components: [
            'item_staff_of_wizardry',
            'item_robe'
        ],
        recipeCost: '600',
        npc: {

        },
        bonuses: {
            bonus_intellect: 16
        }
    },
    {
        tag: 'mask_of_madness',
        name: 'Mask of Madness',
        description: '<h1>Active: Berserk</h1>Gives 110 attack speed and 25% movement speed, but reduces your armor by 8 and silences you.  Lasts 8 seconds.<br />\r\n<h1>Passive: Lifesteal</h1>Heals the attacker for 20% of attack damage dealt.',
        notes: '',
        lore: 'Once this mask is worn, its bearer becomes an uncontrollable aggressive force.',
        cost: '1775',
        manacost: '25',
        cooldown: '22.0',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Attack Speed</span>',
        category: 'Artifacts',
        components: [
            'item_lifesteal',
            'item_quarterstaff'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_damage: 10,
            bonus_attack_speed: 10
        }
    },
    {
        tag: 'helm_of_the_dominator',
        name: 'Helm of the Dominator',
        description: "<h1>Active: Dominate</h1>Takes control of one neutral, non-ancient target unit and sets its movement speed to 425 and max health to a minimum of 1500.<br><br>Dominated units with a max health of greater than 1500 retain their original max health.  Dominated unit's bounty is set to 200 gold.<br><br>Range: 700<br />\r\n<h1>Passive: Dominator Aura</h1> Increases nearby allies' attack speed by 20 and health regen by 8.5.<br><br>Radius: 1200",
        notes: 'Cannot dominate more than one unit at a time.  If a new unit is dominated, the old one will die.<br />Can also Dominate enemy lane creeps and summoned units.<br />Selling Helm of the Dominator will cause dominated units to die.',
        lore: 'The powerful headpiece of a dead necromancer.',
        cost: '1875',
        manacost: '0',
        cooldown: '60.0',
        attrib: '+ <span class="attribVal">2</span> <span class="attribValText">All Attributes</span>',
        category: 'Artifacts',
        components: [
            'item_gloves',
            'item_headdress',
            'item_ring_of_health'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_stats: 2
        }
    },
    {
        tag: 'echo_sabre',
        name: 'Echo Sabre',
        description: '<h1>Passive: Echo Strike</h1> Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 0.8 seconds on each strike.',
        notes: '',
        lore: 'A deceptively swift blade imbued with resonant magic.',
        cost: '2650',
        manacost: '0',
        cooldown: '5.0',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">1.25</span> <span class="attribValText">Mana Regeneration</span>',
        category: 'Artifacts',
        components: [
            'item_ogre_axe',
            'item_oblivion_staff'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 12,
            bonus_attack_speed: 10,
            bonus_mana_regen: 1.25,
            bonus_strength: 12,
            bonus_intellect: 10
        }
    },
    {
        tag: 'maelstrom',
        name: 'Maelstrom',
        description: '<h1>Passive: Chain Lightning</h1>Grants a 25% chance on attack to release a bolt of electricity that leaps between 4 targets within a 900 radius, dealing 160 magical damage to each. Lightning proc pierces evasion.',
        notes: '',
        lore: 'A hammer forged for the gods themselves, Maelstrom allows its user to harness the power of lightning.',
        cost: '2700',
        attrib: '+ <span class="attribVal">24</span> <span class="attribValText">Damage</span>',
        category: 'Artifacts',
        components: [
            'item_mithril_hammer',
            'item_javelin'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 24
        }
    },
    {
        tag: 'diffusal_blade',
        name: 'Diffusal Blade',
        description: '<h1>Active: Inhibit</h1> Targets an enemy, slowing it for 4 seconds.<br><br>Range: 600<br />\r\n<h1>Passive: Manabreak</h1>Each attack burns 50 mana from the target, and deals 0.8 physical damage per burned mana. <br><br>Burns 16 mana per attack from melee illusions and 8 mana per attack from ranged illusions.',
        notes: 'Does not stack with other manabreak abilities.',
        lore: "An enchanted blade that allows the user to cut straight into the enemy's soul.",
        cost: '3150',
        manacost: '0',
        cooldown: '15.0',
        attrib: '+ <span class="attribVal">20</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">10</span> <span class="attribValText">Intelligence</span>',
        category: 'Artifacts',
        components: [
            'item_blade_of_alacrity',
            'item_blade_of_alacrity',
            'item_robe'
        ],
        recipeCost: '700',
        npc: {
            UpgradeRecipe: 'item_recipe_diffusal_blade'
        },
        bonuses: {
            bonus_agility: 20,
            bonus_intellect: 10
        }
    },
    {
        tag: 'heavens_halberd',
        name: "Heaven's Halberd",
        description: '<h1>Active: Disarm</h1>Prevents a target from attacking for 3 seconds on melee targets, and 5 seconds on ranged targets.<br><br>Range: 600',
        notes: '',
        lore: 'This halberd moves with the speed of a smaller weapon, allowing the bearer to win duels that a heavy edge would not.',
        cost: '3450',
        manacost: '100',
        cooldown: '18',
        attrib: '+ <span class="attribVal">25%</span> <span class="attribValText">Evasion</span><br />\n+ <span class="attribVal">25</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">20</span> <span class="attribValText">Strength</span><br />\n+Status Resistance <span class="attribVal">14%</span>',
        category: 'Artifacts',
        components: [
            'item_sange',
            'item_talisman_of_evasion'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_damage: 25,
            bonus_strength: 20
        }
    },
    {
        tag: 'desolator',
        name: 'Desolator',
        description: "<h1>Passive: Corruption</h1> Your attacks reduce the target's armor by 7 for 15 seconds.",
        notes: 'Armor reduction works on buildings.',
        lore: 'A wicked weapon, used in torturing political criminals.',
        cost: '3500',
        attrib: '+ <span class="attribVal">50</span> <span class="attribValText">Damage</span>',
        category: 'Artifacts',
        components: [
            'item_mithril_hammer',
            'item_mithril_hammer',
            'item_blight_stone'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 50
        }
    },
    {
        tag: 'sange_and_yasha',
        name: 'Sange and Yasha',
        description: '',
        notes: 'Yasha-based movement speed bonuses from multiple items do not stack.',
        lore: 'Sange and Yasha, when attuned by the moonlight and used together, become a very powerful combination.',
        cost: '4100',
        attrib: '+ <span class="attribVal">16</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">16</span> <span class="attribValText">Agility</span><br />\n+Status Resistance <span class="attribVal">16%</span><br />\n+ <span class="attribVal">16</span> <span class="attribValText">Attack Speed</span><br />\n+ <span class="attribVal">30%</span> <span class="attribValText">Movement Speed</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Damage</span>',
        category: 'Artifacts',
        components: [
            'item_yasha',
            'item_sange'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_damage: 12,
            bonus_attack_speed: 16,
            bonus_strength: 16,
            bonus_agility: 16
        }
    },
    {
        tag: 'yasha_and_kaya',
        name: 'Yasha and Kaya',
        description: '',
        notes: '',
        lore: '',
        cost: '4100',
        attrib: '+ <span class="attribVal">16</span> <span class="attribValText">Agility</span><br />\n+ <span class="attribVal">16</span> <span class="attribValText">Intelligence</span><br />\n+ <span class="attribVal">16</span> <span class="attribValText">Attack Speed</span><br />\n+Manacost and Manaloss Reduction <span class="attribVal">16%</span><br />\n+ <span class="attribVal">30%</span> <span class="attribValText">Movement Speed</span><br />\n+Spell Amplification <span class="attribVal">12%</span>',
        category: 'Artifacts',
        components: [
            'item_kaya',
            'item_yasha'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_attack_speed: 16,
            bonus_agility: 16,
            bonus_intellect: 16
        }
    },
    {
        tag: 'kaya_and_sange',
        name: 'Kaya and Sange',
        description: '',
        notes: '',
        lore: '',
        cost: '4100',
        attrib: '+ <span class="attribVal">16</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">16</span> <span class="attribValText">Intelligence</span><br />\n+Status Resistance <span class="attribVal">16%</span><br />\n+Manacost and Manaloss Reduction <span class="attribVal">16%</span><br />\n+Spell Amplification <span class="attribVal">12%</span><br />\n+ <span class="attribVal">12</span> <span class="attribValText">Damage</span>',
        category: 'Artifacts',
        components: [
            'item_sange',
            'item_kaya'
        ],
        recipeCost: '',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_damage: 12,
            bonus_strength: 16,
            bonus_intellect: 16
        }
    },
    {
        tag: 'skadi',
        name: 'Eye of Skadi',
        description: '<h1>Passive: Cold Attack</h1> Attacks lower enemy attack speed by 45 and movement speed by 35%. <br><br>Lasts 5 seconds when used by melee heroes, and 2.5 seconds when used by ranged.',
        notes: 'Lasts 5 seconds with melee Eye of Skadi, 2.5 seconds with ranged Eye of Skadi.',
        lore: 'Extremely rare artifact, guarded by the azure dragons.',
        cost: '5500',
        attrib: '+ <span class="attribVal">25</span> <span class="attribValText">All Attributes</span><br />\n+ <span class="attribVal">225</span> <span class="attribValText">Health</span><br />\n+ <span class="attribVal">250</span> <span class="attribValText">Mana</span>',
        category: 'Artifacts',
        components: [
            'item_ultimate_orb',
            'item_ultimate_orb',
            'item_point_booster'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_health: 225,
            bonus_mana: 250,
            bonus_all_stats: 25
        }
    },
    {
        tag: 'satanic',
        name: 'Satanic',
        description: '<h1>Active: Unholy Rage</h1>Increases Lifesteal percentage to 200% for 5 seconds. <br />\r\n<h1>Passive: Lifesteal</h1>Heals the attacker for 25% of attack damage dealt.',
        notes: '',
        lore: 'Immense power at the cost of your soul.',
        cost: '5300',
        cooldown: '35.0',
        attrib: '+ <span class="attribVal">25</span> <span class="attribValText">Strength</span><br />\n+ <span class="attribVal">25</span> <span class="attribValText">Damage</span><br />\n+Status Resistance <span class="attribVal">30%</span>',
        category: 'Artifacts',
        components: [
            'item_lifesteal',
            'item_claymore',
            'item_reaver'
        ],
        recipeCost: '',
        npc: {

        },
        bonuses: {
            bonus_damage: 25,
            bonus_strength: 25
        }
    },
    {
        tag: 'mjollnir',
        name: 'Mjollnir',
        description: '<h1>Active: Static Charge</h1>Places a charged shield on a target unit for 15 seconds which has a 20% chance to release a 200 magical damage shocking bolt at a nearby attacker and 4 additional enemies.<br><br>Range: 800<br />\r\n<h1>Passive: Chain Lightning</h1>Grants a 25% chance on attack to release a bolt of electricity that leaps between 12 targets within a 900 radius, dealing 170 magical damage to each. Lightning proc pierces evasion.',
        notes: "Static Charge cannot trigger more than once per second.<br />Static Charge's shock deals magical damage centered on hero with the Static Charge. Static Charge's targets cannot be more than 900 range away.<br />Static Charge procs will not bounce to heroes that are invisible or hidden by Fog of War.",
        lore: "Thor's magical hammer, made for him by the dwarves Brok and Eitri.",
        cost: '5600',
        manacost: '50',
        cooldown: '35.0',
        attrib: '+ <span class="attribVal">24</span> <span class="attribValText">Damage</span><br />\n+ <span class="attribVal">75</span> <span class="attribValText">Attack Speed</span>',
        category: 'Artifacts',
        components: [
            'item_maelstrom',
            'item_hyperstone'
        ],
        recipeCost: '900',
        npc: {
            ItemDisassembleRule: 'DOTA_ITEM_DISASSEMBLE_ALWAYS'
        },
        bonuses: {
            bonus_damage: 24,
            bonus_attack_speed: 75
        }
    },
    {
        tag: 'energy_booster',
        name: 'Energy Booster',
        description: '',
        notes: '',
        lore: 'This lapis gemstone is commonly added to the collection of wizards seeking to improve their presence in combat.',
        cost: '900',
        attrib: '+ <span class="attribVal">250</span> <span class="attribValText">Mana</span>',
        category: 'Secret shop',
        npc: {
            SideShop: '1',
            SecretShop: '1'
        },
        bonuses: {
            bonus_mana: 250
        }
    },
    {
        tag: 'vitality_booster',
        name: 'Vitality Booster',
        description: '',
        notes: '',
        lore: 'A ruby gemstone that has been passed down through generations of warrior kin.',
        cost: '1100',
        attrib: '+ <span class="attribVal">250</span> <span class="attribValText">Health</span>',
        category: 'Secret shop',
        npc: {
            SideShop: '1',
            SecretShop: '1'
        },
        bonuses: {
            bonus_health: 250
        }
    },
    {
        tag: 'point_booster',
        name: 'Point Booster',
        description: '',
        notes: '',
        lore: 'A perfectly formed amethyst that nourishes body and mind when held.',
        cost: '1200',
        attrib: '+ <span class="attribVal">175</span> <span class="attribValText">Mana</span><br />\n+ <span class="attribVal">175</span> <span class="attribValText">Health</span>',
        category: 'Secret shop',
        npc: {
            SecretShop: '1'
        },
        bonuses: {
            bonus_health: 175,
            bonus_mana: 175
        }
    },
    {
        tag: 'platemail',
        name: 'Platemail',
        description: '',
        notes: '',
        lore: 'Thick metal plates that protect the entire upper body. Avoid dropping on feet.',
        cost: '1400',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">Armor</span>',
        category: 'Secret shop',
        npc: {
            SecretShop: '1'
        },
        bonuses: {
            bonus_armor: 10
        }
    },
    {
        tag: 'talisman_of_evasion',
        name: 'Talisman of Evasion',
        description: '',
        notes: 'Stacks diminishingly with other sources of Evasion.',
        lore: 'A necklace that allows you to anticipate enemy attacks.',
        cost: '1400',
        attrib: '+ <span class="attribVal">15%</span> <span class="attribValText">Evasion</span>',
        category: 'Secret shop',
        npc: {
            SecretShop: '1'
        },
        bonuses: {

        }
    },
    {
        tag: 'hyperstone',
        name: 'Hyperstone',
        description: '',
        notes: '',
        lore: 'A mystical, carved stone that boosts the fervor of the holder.',
        cost: '2000',
        attrib: '+ <span class="attribVal">55</span> <span class="attribValText">Attack Speed</span>',
        category: 'Secret shop',
        npc: {
            SecretShop: '1'
        },
        bonuses: {
            bonus_attack_speed: 55
        }
    },
    {
        tag: 'ultimate_orb',
        name: 'Ultimate Orb',
        description: '',
        notes: '',
        lore: 'A mystical orb containing the essence of life.',
        cost: '2150',
        attrib: '+ <span class="attribVal">10</span> <span class="attribValText">All Attributes</span>',
        category: 'Secret shop',
        npc: {
            SecretShop: '1'
        },
        bonuses: {
            bonus_all_stats: 10
        }
    },
    {
        tag: 'demon_edge',
        name: 'Demon Edge',
        description: '',
        notes: '',
        lore: 'One of the oldest weapons forged by the Demon-Smith Abzidian, it killed its maker when he tested its edge.',
        cost: '2200',
        attrib: '+ <span class="attribVal">42</span> <span class="attribValText">Damage</span>',
        category: 'Secret shop',
        npc: {
            SecretShop: '1'
        },
        bonuses: {
            bonus_damage: 42
        }
    },
    {
        tag: 'mystic_staff',
        name: 'Mystic Staff',
        description: '',
        notes: '',
        lore: 'Enigmatic staff made of only the most expensive crystals.',
        cost: '2700',
        attrib: '+ <span class="attribVal">25</span> <span class="attribValText">Intelligence</span>',
        category: 'Secret shop',
        npc: {
            SecretShop: '1'
        },
        bonuses: {
            bonus_intellect: 25
        }
    },
    {
        tag: 'reaver',
        name: 'Reaver',
        description: '',
        notes: '',
        lore: 'A massive axe capable of tearing whole mountains down.',
        cost: '3000',
        attrib: '+ <span class="attribVal">25</span> <span class="attribValText">Strength</span>',
        category: 'Secret shop',
        npc: {
            SecretShop: '1'
        },
        bonuses: {
            bonus_strength: 25
        }
    },
    {
        tag: 'eagle',
        name: 'Eaglesong',
        description: '',
        notes: '',
        lore: 'Capturing the majestic call of an eagle, this mystical horn brings limitless dexterity to those who hear it.',
        cost: '3200',
        attrib: '+ <span class="attribVal">25</span> <span class="attribValText">Agility</span>',
        category: 'Secret shop',
        npc: {
            SecretShop: '1'
        },
        bonuses: {
            bonus_agility: 25
        }
    },
    {
        tag: 'relic',
        name: 'Sacred Relic',
        description: '',
        notes: '',
        lore: 'An ancient weapon that often turns the tides of war.',
        cost: '3800',
        attrib: '+ <span class="attribVal">60</span> <span class="attribValText">Damage</span>',
        category: 'Secret shop',
        npc: {
            SecretShop: '1'
        },
        bonuses: {
            bonus_damage: 60
        }
    }
]

export { items }
