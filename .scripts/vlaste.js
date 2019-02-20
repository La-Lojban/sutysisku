const request = require("request");
const libxmljs = require("libxmljs");
const path = require("path-extra");
const fs = require("fs");

const dumps = "../../dumps";
const intro = "<valsi word=\"Intro\" class=\"\"><definition>&lt;ul&gt;&lt;li&gt;this dictionary lists basic words. Lojban is a live and dynamic language and accumulates more words over time.&lt;/li&gt;&lt;/ul&gt;&lt;div&gt;The general rule is that &lt;u&gt;everyone is free to create new words&lt;/u&gt; in Lojban. When you need a new word consult Lojbanists to discuss a place structure and the sounding of it.&lt;/div&gt;&lt;ul&gt;&lt;li&gt;examples are provided only for most useful places of verbs. Places not listed here may be sometimes used by people in real conversations. Feel free to consult them on the meaning of those places.&lt;ul&gt;&lt;li&gt;some examples represent advanced style. I added them to show different (sometimes more powerful) applications of a word. You may try to analyze them later.&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;for verbs with many places you may remember only a few of them. Not all places are always needed. Practice will allow you to gradually internalize needed places while speaking to Lojbanists in real time.&lt;/li&gt;&lt;/ul&gt;&lt;h1&gt;Verbs&lt;/h1&gt;&lt;p&gt;Lojban verbs have place structure. Places are to be filled with nouns, names or pronouns.&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi prami do&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I love you.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;mi&lt;/strong&gt; = &lt;em&gt;I&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;prami&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt; loves x&lt;sub&gt;2&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;do&lt;/strong&gt; = &lt;em&gt;you&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Here the verb &lt;strong&gt;prami&lt;/strong&gt; (&lt;em&gt;to love&lt;/em&gt;) has two places. The first place (&lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;/em&gt;) is filled with the pronoun &lt;strong&gt;mi&lt;/strong&gt; (&lt;em&gt;I&lt;/em&gt;) and the second place (&lt;em&gt;x&lt;sub&gt;2&lt;/sub&gt;&lt;/em&gt;) with the pronoun &lt;strong&gt;do&lt;/strong&gt; (&lt;em&gt;you&lt;/em&gt;).&lt;/p&gt;&lt;p&gt;Every verb can be turned into a noun by putting the particle &lt;strong&gt;lo&lt;/strong&gt; in front of it:&lt;/p&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;prami&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt; loves x&lt;sub&gt;2&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;lo prami&lt;/strong&gt; = &lt;em&gt;the one who loves, lover&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Hence, &lt;strong&gt;lo prami&lt;/strong&gt; refers to the first place (&lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;/em&gt;) of the verb &lt;strong&gt;prami&lt;/strong&gt;. To refer to the second place (&lt;em&gt;x&lt;sub&gt;2&lt;/sub&gt;&lt;/em&gt;) the particle &lt;strong&gt;se&lt;/strong&gt; is put in front of the verb:&lt;/p&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;lo se prami&lt;/strong&gt; = &lt;em&gt;the one who is loved, beloved one&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;h1&gt;Types of places&lt;/h1&gt;&lt;p&gt;Each place in Lojban can contain one of the following:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;em&gt;clause&lt;/em&gt; (of which &lt;em&gt;property&lt;/em&gt; and &lt;em&gt;proposition&lt;/em&gt; are its special cases)&lt;/li&gt;&lt;li&gt;&lt;em&gt;entity&lt;/em&gt; (of which &lt;em&gt;text&lt;/em&gt; is a special case)&lt;/li&gt;&lt;li&gt;&lt;em&gt;number&lt;/em&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Those are put in brackets after each place, for example:&lt;/p&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;catlu&lt;/strong&gt; — &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt;&lt;/em&gt; looks at &lt;em&gt;x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(clause)&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;div&gt;In case of doubt with places open this dictionary and look at the examples for the word you need. At least one of the usage examples will have all places filled.&lt;/div&gt;&lt;p&gt;Besides, every place (no matter whether it's a clause or an entity) can be explicitly marked as:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;group&lt;/li&gt;&lt;li&gt;ordered group&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Entity&lt;/h2&gt;&lt;p&gt;&lt;em&gt;Entity&lt;/em&gt; place in a noun matches an &lt;em&gt;entity&lt;/em&gt; place of the main verb:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;lo plise cu grute&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;Apple is a fruit.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;lo&lt;/strong&gt; = &lt;em&gt;takes the first place of verb and converts the verb to a noun&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;plise&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt; (entity) is an apple of species x&lt;sub&gt;2&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;cu&lt;/strong&gt; = &lt;em&gt;marks the beginning of the clause tail&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;grute&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt; (entity) is a fruit of plant x&lt;sub&gt;2&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Here&lt;/p&gt;&lt;ul&gt;&lt;li&gt;the first place of &lt;strong&gt;plise&lt;/strong&gt; is an &lt;em&gt;entity&lt;/em&gt;,&lt;/li&gt;&lt;li&gt;&lt;strong&gt;plise&lt;/strong&gt; is converted to a noun,&lt;/li&gt;&lt;li&gt;this noun is put into the first place of the verb &lt;strong&gt;grute&lt;/strong&gt;,&lt;/li&gt;&lt;li&gt;the first place of &lt;strong&gt;grute&lt;/strong&gt; is also an &lt;em&gt;entity&lt;/em&gt;,&lt;/li&gt;&lt;li&gt;hence &lt;em&gt;entity&lt;/em&gt; in the noun matches &lt;em&gt;entity&lt;/em&gt; of the verb.&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Clause&lt;/h2&gt;&lt;p&gt;&lt;em&gt;Clause&lt;/em&gt; place in a noun matches a &lt;em&gt;clause&lt;/em&gt; place of the main verb.&lt;/p&gt;&lt;p&gt;It means that the place is filled either with a clause or with another place of &lt;em&gt;clause&lt;/em&gt; type:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;lo cipra cu cumki&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;A test is possible.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;cipra&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(clause)&lt;/sub&gt; is a test, act of examination, study of x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;cumki&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(clause)&lt;/sub&gt; is possible&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Here, the first place of &lt;strong&gt;cipra&lt;/strong&gt; is a clause and it matches the first place of &lt;strong&gt;cumki&lt;/strong&gt; which is also a clause.&lt;/p&gt;&lt;hr /&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi djica lo se nitcu&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I want what is needed.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;djica&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt; wants x&lt;sub&gt;2&lt;/sub&gt; (clause)&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;nitcu&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt; needs x&lt;sub&gt;2&lt;/sub&gt; (clause)&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;se&lt;/strong&gt; = &lt;em&gt;makes a new verb by exchanging first two places in a verb&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;se nitcu&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt; (clause) is needed by x&lt;sub&gt;2&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Here, the second place of &lt;strong&gt;djica&lt;/strong&gt; is a clause and it matches the second place of &lt;strong&gt;nitcu&lt;/strong&gt; which is also a clause.&lt;/p&gt;&lt;hr /&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;lo nicte cu nu lo solri na se viska&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;Nighttime is when the Sun isn't seen.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;nicte&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt; (clause) is a nighttime&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;nu&lt;/strong&gt; = &lt;em&gt;makes a verb of clause type out of a clause&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;lo solri&lt;/strong&gt; = &lt;em&gt;the Sun&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;na&lt;/strong&gt; = &lt;em&gt;not&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;se viska&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt; is seen by x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Here, we have a clause created using &lt;strong&gt;nu&lt;/strong&gt; and it matches the first place of &lt;strong&gt;nicte&lt;/strong&gt; which is also a clause.&lt;/p&gt;&lt;h2&gt;Group and ordered group&lt;/h2&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;do jo'u mi casnu lo nanba&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;You and I are discussing bread.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;casnu&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(entity group)&lt;/sub&gt; discuss x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;lo nanba&lt;/strong&gt; = &lt;em&gt;bread&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;The first place of the verb &lt;strong&gt;casnu&lt;/strong&gt; describes a group, members of which discuss something between themlseves. Here &lt;strong&gt;jo'u&lt;/strong&gt; joins two pronouns into such a group.&lt;/p&gt;&lt;p&gt;Usual nouns can be used in such places as well:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;lo prenu cu casnu lo nanba&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;You and I are discussing bread.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;lo prenu&lt;/strong&gt; = &lt;em&gt;people&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;hr /&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;pruce fo ⟨lo nu gau glare⟩ ⟨lo nu gau lenku⟩&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;It's a process coming through stages of ⟨heating⟩ and then ⟨chilling⟩.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;pruce&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(clause)&lt;/sub&gt; is a process with input x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt; and output x&lt;sub&gt;3&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt; via stages x&lt;sub&gt;4&lt;/sub&gt;&lt;sub&gt;(entity ordered group)&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;The fourth place of the verb &lt;strong&gt;pruce&lt;/strong&gt; describes an ordered group specifying stages. We use &lt;strong&gt;ce'o&lt;/strong&gt; here to join nouns (describing stages) into an ordered group.&lt;/p&gt;&lt;h2&gt;Property (infinitive)&lt;/h2&gt;&lt;p&gt;&lt;em&gt;Property&lt;/em&gt; is a clause that contains a &lt;strong&gt;ce'u&lt;/strong&gt; particle:&lt;/p&gt;&lt;blockquote&gt;&lt;strong&gt;mi gleki lo ka ce'u prami&lt;/strong&gt; means the same as&lt;br /&gt;&lt;strong&gt;mi gleki lo nu mi prami&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I am happy that I love&lt;/em&gt;, &lt;em&gt;I am happy of loving (someone).&lt;/em&gt;&lt;/blockquote&gt;&lt;blockquote&gt;&lt;strong&gt;mi gleki lo ka prami ce'u&lt;/strong&gt; means the same as&lt;br /&gt;&lt;strong&gt;mi gleki lo nu prami mi&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I am happy that someone loves me&lt;/em&gt;, &lt;em&gt;I am happy of being loved (by someone)&lt;/em&gt;&lt;/blockquote&gt;&lt;p&gt;The particle &lt;strong&gt;ce'u&lt;/strong&gt; is used for referring to the noun from the outside verb.&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Definitions of verbs usually explicitly specify to what place &lt;strong&gt;ce'u&lt;/strong&gt; refers to:&lt;/li&gt;&lt;/ul&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;lo ka na jinga pu betri mi&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;Not winning was a tragedy to me.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;betri&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(property of x&lt;sub&gt;2&lt;/sub&gt;)&lt;/sub&gt; is a tragedy for x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt;&lt;/em&gt;&lt;dl&gt;&lt;dd&gt;- here it's the speaker who didn't win.&lt;/dd&gt;&lt;/dl&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;If not explained in the dictionary then:&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;strong&gt;ce'u&lt;/strong&gt; in the first place of the verb refers to the 2nd place of the verb like in the previous example.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;ce'u&lt;/strong&gt; in another place refers to the 1st place of the verb:&lt;/li&gt;&lt;/ul&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi kakne lo ka limna&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I am able to swim.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;kakne&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt; is capable of doing x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(property of x&lt;sub&gt;1&lt;/sub&gt;)&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;&lt;strong&gt;ka&lt;/strong&gt; is used to express English infinitives:&lt;/p&gt;&lt;blockquote&gt;&lt;strong&gt;mi djica lo ka pinxe&lt;/strong&gt; or &lt;strong&gt;mi djica lo nu mi pinxe&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I want to drink.&lt;/em&gt;&lt;/blockquote&gt;&lt;p&gt;Put it another way, &lt;strong&gt;ka&lt;/strong&gt; creates a property, which has at least one \"open slot\" (marked by &lt;strong&gt;ce'u&lt;/strong&gt;). Certain verbs expect such a property in one of their places, and in such verbs properties are applied to one of the other places. So if we put a property in one place, the verb copies values of other places in place of &lt;strong&gt;ce'u&lt;/strong&gt;.&lt;/p&gt;&lt;div&gt;&lt;strong&gt;ce'u&lt;/strong&gt; by itself doesn't have special meaning. It's the definitions of verbs in this dictionary that tell the relations between places and what value will &lt;strong&gt;ce'u&lt;/strong&gt; take.&lt;/div&gt;&lt;h3&gt;Omitting &lt;strong&gt;ce'u&lt;/strong&gt;&lt;/h3&gt;&lt;p&gt;The first omitted noun in the embedded clause is automatically assigned the value of &lt;strong&gt;ce'u&lt;/strong&gt; &lt;strong&gt;ka&lt;/strong&gt; is used to start the clause. So we can make the first sentence shorter:&lt;/p&gt;&lt;blockquote&gt;&lt;strong&gt;mi gleki lo ka prami&lt;/strong&gt; means the same as&lt;br /&gt;&lt;strong&gt;mi gleki lo ka ce'u prami&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I am happy that I love&lt;/em&gt;, &lt;em&gt;I am happy of loving (someone).&lt;/em&gt;&lt;/blockquote&gt;&lt;p&gt;However, compare:&lt;/p&gt;&lt;blockquote&gt;&lt;strong&gt;mi gleki lo ka prami ce'u&lt;/strong&gt;&lt;/blockquote&gt;&lt;p&gt;Here, in order to omit &lt;strong&gt;ce'u&lt;/strong&gt; we need to somehow fill the first noun so that &lt;strong&gt;ce'u&lt;/strong&gt; goes to the next unfilled noun. Here is how we cand do that:&lt;/p&gt;&lt;blockquote&gt;&lt;strong&gt;mi gleki lo ka do prami&lt;/strong&gt; means the same as&lt;br /&gt;&lt;strong&gt;mi gleki lo ka do prami ce'u&lt;/strong&gt; or &lt;strong&gt;mi gleki lo nu do prami mi&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I am happy that you love me&lt;/em&gt;, &lt;em&gt;I am happy of being loved by you&lt;/em&gt;.&lt;/blockquote&gt;&lt;h3&gt;&lt;strong&gt;ce'u&lt;/strong&gt; referring to several places&lt;/h3&gt;&lt;p&gt;Some properties can refer equally to several places. For example, for &lt;strong&gt;zmadu&lt;/strong&gt; and &lt;strong&gt;mleca&lt;/strong&gt; the particle &lt;strong&gt;ce'u&lt;/strong&gt; refers equally to the first two places:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi zmadu do lo ka clani vau lo mitre be li pi no mu&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I am 5 centimeters taller than you.&lt;/em&gt;&lt;br /&gt;&lt;tt&gt;I am more than you in length by 0.05 meters. [literally]&lt;/tt&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;zmadu&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt; exceeds or is more than x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt; in x&lt;sub&gt;3&lt;/sub&gt;&lt;sub&gt;(property of x&lt;sub&gt;1&lt;/sub&gt; and x&lt;sub&gt;2&lt;/sub&gt; with &lt;strong&gt;kau&lt;/strong&gt;)&lt;/sub&gt; by amount x&lt;sub&gt;4&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Here, &lt;strong&gt;mi&lt;/strong&gt; and &lt;strong&gt;do&lt;/strong&gt; are compared, and &lt;strong&gt;ce'u&lt;/strong&gt; in the third place refers to &lt;strong&gt;mi&lt;/strong&gt; and &lt;strong&gt;do&lt;/strong&gt; equally.&lt;/p&gt;&lt;h3&gt;&lt;strong&gt;ce'u&lt;/strong&gt; in &lt;strong&gt;simxu&lt;/strong&gt;&lt;/h3&gt;&lt;p&gt;A very special case is &lt;strong&gt;simxu&lt;/strong&gt; that has in its second place two &lt;strong&gt;ce'u&lt;/strong&gt;:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi jo'u do simxu lo ka ce'u ce'u prami&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;You and I love each other.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;The first place of &lt;strong&gt;simxu&lt;/strong&gt; is one or several nouns connected with &lt;strong&gt;jo'u&lt;/strong&gt;.&lt;/p&gt;&lt;p&gt;The second place of &lt;strong&gt;simxu&lt;/strong&gt; is an abstraction. The first &lt;u&gt;two&lt;/u&gt; unfilled places take have &lt;strong&gt;ce'u&lt;/strong&gt; implied. So you can remove both &lt;strong&gt;ce'u&lt;/strong&gt; in this example:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi jo'u do simxu lo ka prami&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;You and I love each other.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;h2&gt;&lt;strong&gt;kau&lt;/strong&gt; in places&lt;/h2&gt;&lt;p&gt;The interjection &lt;strong&gt;kau&lt;/strong&gt; allows putting indirect questions that can refer to other places:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi lacri do lo ka ma kau sidju ce'u&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I rely on you to help me.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;lacri&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt; relies, counts on, trusts x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt; to bring about, ensure, maintain state x&lt;sub&gt;3&lt;/sub&gt;&lt;sub&gt;(property of x&lt;sub&gt;1&lt;/sub&gt; with &lt;strong&gt;kau&lt;/strong&gt;)&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Here, &lt;strong&gt;ma kau&lt;/strong&gt; refers to the x&lt;sub&gt;2&lt;/sub&gt; place of &lt;strong&gt;lacri&lt;/strong&gt;.&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;lo mlatu cu klani li pi mu lo ka mitre ma kau&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;A cat is measured 0.5 meters (e.g. in length or some other dimension).&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;klani&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt; is measured by x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(number)&lt;/sub&gt; on x&lt;sub&gt;3&lt;/sub&gt;&lt;sub&gt;(property of x&lt;sub&gt;1&lt;/sub&gt; with &lt;strong&gt;kau&lt;/strong&gt;)&lt;/sub&gt;&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Here, &lt;strong&gt;ma kau&lt;/strong&gt; refers to x&lt;sub&gt;2&lt;/sub&gt; place of &lt;strong&gt;klani&lt;/strong&gt;.&lt;/p&gt;&lt;h2&gt;&lt;em&gt;Proposition&lt;/em&gt; type&lt;/h2&gt;&lt;p&gt;&lt;em&gt;Proposition&lt;/em&gt; is a place filled with &lt;strong&gt;du'u&lt;/strong&gt;. It works exactly as &lt;strong&gt;nu&lt;/strong&gt; but is traditionally used with some places and always mentioned for them in the dictionary:&lt;/p&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;djuno&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt; (entity) knows that x&lt;sub&gt;2&lt;/sub&gt; (proposition) is true&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi djuno lo du'u do stati&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I know that you are smart.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;Instead of &lt;em&gt;property&lt;/em&gt; you may use another type of clause with &lt;strong&gt;nu&lt;/strong&gt; or &lt;strong&gt;du'u&lt;/strong&gt;. Compare&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi djica lo ka sipna&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I want to sleep.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi djica lo nu do sipna&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I want you to sleep.&lt;/em&gt;&lt;br /&gt;&lt;tt&gt;I want that you sleep. [literally]&lt;/tt&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;h2&gt;&lt;em&gt;Text&lt;/em&gt; type&lt;/h2&gt;&lt;p&gt;&lt;em&gt;Text&lt;/em&gt; place is filled with quotes and start with &lt;strong&gt;zo&lt;/strong&gt;, &lt;strong&gt;lu ... li'u&lt;/strong&gt;, &lt;strong&gt;zoi&lt;/strong&gt; or some other particles. The dictionary provides examples of such places.&lt;/p&gt;&lt;h2&gt;&lt;em&gt;Number&lt;/em&gt; type&lt;/h2&gt;&lt;p&gt;Numbers are marked with &lt;strong&gt;li&lt;/strong&gt;:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;ti mitre li mu&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;This is 5 meters long.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;or a \"number\" place from another verb: &lt;strong&gt;lo namcu&lt;/strong&gt;, &lt;strong&gt;lo se mitre&lt;/strong&gt;.&lt;/dd&gt;&lt;/dl&gt;&lt;h2&gt;Other types&lt;/h2&gt;&lt;p&gt;There are other more rare types of places like &lt;em&gt;taxon&lt;/em&gt;. &lt;em&gt;taxon&lt;/em&gt; is filled with names of species, plant varieties, which start with &lt;strong&gt;la&lt;/strong&gt;.&lt;/p&gt;&lt;h2&gt;&lt;strong&gt;tu'a&lt;/strong&gt; and &lt;strong&gt;zo'ei&lt;/strong&gt;&lt;/h2&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;le nakni na nitcu lo ka co'e&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;He does not have to do this.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;co'e&lt;/strong&gt; — elliptical/unspecified verb. Often translated with &lt;em&gt;this&lt;/em&gt;, &lt;em&gt;that&lt;/em&gt;, &lt;em&gt;it&lt;/em&gt;.&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;le nakni&lt;/strong&gt; = &lt;em&gt;he&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;na&lt;/strong&gt; = &lt;em&gt;preposition: not&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;nitcu&lt;/strong&gt; = &lt;em&gt;to need&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;ma pu co'e&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;Who did it?&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi curmi lo nu do co'e&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I will give you permission to do it.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;pu&lt;/strong&gt; = &lt;em&gt;preposition: past tense&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;curmi&lt;/strong&gt; = &lt;em&gt;to let something happen&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;So &lt;strong&gt;co'e&lt;/strong&gt; is a verb that is known from context. &lt;strong&gt;mi co'e&lt;/strong&gt; might mean &lt;em&gt;I am doing you know what&lt;/em&gt;, or &lt;em&gt;You know who I am.&lt;/em&gt;&lt;/p&gt;&lt;p&gt;While &lt;strong&gt;zo'e&lt;/strong&gt; is the ‘don't care’ noun, &lt;strong&gt;co'e&lt;/strong&gt; is the ‘don't care’ verb. For example, when I say &lt;strong&gt;mi klama lo barja&lt;/strong&gt;, I'm not bothering to specify my point of origin, route, or vehicle. And when I say &lt;strong&gt;mi co'e lo barja&lt;/strong&gt; I don't specify what I'm doing to the bar, probably I'm visiting it. So &lt;strong&gt;mi co'e lo barja&lt;/strong&gt; means something like &lt;em&gt;I thingummy the bar&lt;/em&gt;: the bar and I are in some relationship, but I'm not bothering to say what it is. I might be going to it, coming from it, sleeping in it, refurbishing it, or hearing about my neighbor getting drunk in it once. It just doesn't matter enough for me to say what.&lt;/p&gt;&lt;p&gt;The verb &lt;strong&gt;djica&lt;/strong&gt; requires us to specify an event that one desires.&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi djica lo nu mi citka lo plise&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I want to eat an apple.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;citka&lt;/strong&gt; = &lt;em&gt;to eat&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;&lt;strong&gt;lo plise&lt;/strong&gt; = &lt;em&gt;apple/apples&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Okay, but usually we just say in English &lt;em&gt;I want an apple&lt;/em&gt;. We can't desire the apple itself, we want to &lt;u&gt;do&lt;/u&gt; something with it.&lt;/p&gt;&lt;p&gt;Here we can omit the second &lt;strong&gt;mi&lt;/strong&gt; and replace the verb &lt;em&gt;to eat&lt;/em&gt; with &lt;strong&gt;co'e&lt;/strong&gt;.&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi djica lo nu co'e lo plise&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I want something to do with an apple.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;So I let it be up to context what abstraction about the apple I desire.&lt;/p&gt;&lt;p&gt;There is a compact abbreviation for &lt;strong&gt;lo nu co'e&lt;/strong&gt; which is &lt;strong&gt;tu'a&lt;/strong&gt;:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi djica tu'a lo plise&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I want an apple.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;&lt;strong&gt;tu'a&lt;/strong&gt; takes a noun and converts it to an elliptical abstraction which has something to do with that noun. One always has to guess what abstraction the speaker means by &lt;strong&gt;tu'a&lt;/strong&gt; + the noun, so it should only be used when context makes it easy to guess.&lt;/p&gt;&lt;p&gt;Another example:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;za'a do gasnu tu'a lo skami&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I see that you make the computer do something.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;gasnu&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt; does, brings about x&lt;sub&gt;2&lt;/sub&gt; (clause)&lt;/em&gt;&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;There are situations where you cannot use &lt;strong&gt;tu'a&lt;/strong&gt;, even though it would seem suitable. These situations are when I don't want the resulting noun to be an abstraction, but a concrete noun. In this case, one can use &lt;strong&gt;zo'e pe&lt;/strong&gt; or its abbreviation &lt;strong&gt;zo'ei&lt;/strong&gt;.&lt;/p&gt;&lt;blockquote&gt;&lt;strong&gt;mi djuno zo'ei do&lt;/strong&gt; or &lt;strong&gt;mi djuno zo'e pe do&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I know about you, I know something about you.&lt;/em&gt;&lt;/blockquote&gt;&lt;h2&gt;Colloquial: an &lt;em&gt;entity&lt;/em&gt; place into a &lt;em&gt;clause&lt;/em&gt; place&lt;/h2&gt;&lt;p&gt;These last two rules can be found in colloquial speech. They are sometimes avoided by careful speakers. However, if you bump into them you will know how to deal with them.&lt;/p&gt;&lt;p&gt;Putting an &lt;em&gt;entity&lt;/em&gt; place into a &lt;em&gt;clause&lt;/em&gt; place denotes an obvious relation:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi djica lo plise&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I want an apple.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;The second place of &lt;strong&gt;djica&lt;/strong&gt; is a clause. Thus &lt;strong&gt;lo plise&lt;/strong&gt;, &lt;em&gt;an apple&lt;/em&gt; plays some role in that clause. Probably it means:&lt;/dd&gt;&lt;/dl&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi djica lo nu mi citka lo plise&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I want to eat an apple.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;but maybe I just want to hold an apple in my hand. If you need vagueness or just lazy to say more you can use this method.&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Thus, this situation can be viewed as omitting &lt;strong&gt;tu'a&lt;/strong&gt; in &lt;strong&gt;mi djica tu'a lo plise&lt;/strong&gt;.&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;do nabmi&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;You are a problem.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;nabmi&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(clause)&lt;/sub&gt; is a problem...&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;probably means that there is something problematic with you.&lt;/dd&gt;&lt;/dl&gt;&lt;p&gt;Thus, this can be viewed as omitting &lt;strong&gt;tu'a&lt;/strong&gt; in &lt;strong&gt;tu'a do nabmi&lt;/strong&gt;, or (which would mean the same) as omitting &lt;strong&gt;jai&lt;/strong&gt; in &lt;strong&gt;do jai nabmi&lt;/strong&gt;.&lt;/p&gt;&lt;dl&gt;&lt;dd&gt;This situation is also called \"grammatical raising\" in English. It neither recommended, nor terribly wrong. Still it won't be smoothly accepted by everyone. Compare literal English translation doesn't sounding right:&lt;/dd&gt;&lt;/dl&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi pacna lo so'i se dunda&lt;/strong&gt;&lt;br /&gt;&lt;tt&gt;I hope many presents. [literally]&lt;/tt&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;instead of&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi pacna tu'a lo so'i se dunda&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I hope for many presents.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;h2&gt;Colloquial: a &lt;em&gt;clause&lt;/em&gt; place into an &lt;em&gt;entity&lt;/em&gt; place&lt;/h2&gt;&lt;p&gt;A &lt;em&gt;clause&lt;/em&gt; place in a noun can be put into an &lt;em&gt;entity&lt;/em&gt; place of the main verb:&lt;/p&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;mi klama lo nu penmi&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;I go to a meeting.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;strong&gt;klama&lt;/strong&gt; = &lt;em&gt;x&lt;sub&gt;1&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt; goes to x&lt;sub&gt;2&lt;/sub&gt;&lt;sub&gt;(entity)&lt;/sub&gt;...&lt;/em&gt;&lt;/dd&gt;&lt;dd&gt;The second place of &lt;strong&gt;klama&lt;/strong&gt; denotes a place where you go. &lt;strong&gt;lo nu penmi&lt;/strong&gt; denotes a process of meeting, thus we assume that here it is bound to some location where I go.&lt;/dd&gt;&lt;/dl&gt;&lt;dl&gt;&lt;dd&gt;Another example:&lt;/dd&gt;&lt;/dl&gt;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;strong&gt;lo ka kucli pu catra lo mlatu&lt;/strong&gt;&lt;br /&gt;&lt;em&gt;Curiosity killed the cat.&lt;/em&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;dl&gt;&lt;dd&gt;&lt;dl&gt;&lt;dd&gt;- here &lt;em&gt;curiosity&lt;/em&gt; is turned into an entity that is able to kill. As it's a clause with &lt;strong&gt;ka&lt;/strong&gt; it has to refer to some place.&lt;/dd&gt;&lt;/dl&gt;&lt;/dd&gt;&lt;dd&gt;As the definition of &lt;strong&gt;catra&lt;/strong&gt; says nothing about such situation we assume that it refers to the first unfilled place: here it's x&lt;sub&gt;2&lt;/sub&gt;. Thus, it's the curiosity of the cat that killed it.&lt;/dd&gt;&lt;/dl&gt;</definition></valsi>";

//MediaWiki editing
const readConfig = (filename) => {
  const configDirectory = path.join(path.homedir(), ".livla");
  ensureDirExistence(configDirectory);
  file = path.join(configDirectory, filename);
  try {
    return fs.readFileSync(file, {
      encoding: 'utf8'
    });
  } catch (e) {
    // If we get an “ENOENT” error, we return an empty string.
    // Other errors are still thrown.
    if (typeof(e.code) === "undefined" || e.code !== 'ENOENT') {
      throw e;
    }
    return "";
  }
}

const mw_edit = (title, text, resume) => {
  const mw = readConfig("mw-settings.json"); // Ensure existance
  const mwSettings = JSON.parse(mw);
  const user = mwSettings.ralju.user;
  const pass = mwSettings.ralju.password;
  const bot = require('nodemw');
  const client = new bot({
    "protocol": "https",
    "server": "mw.lojban.org", // host name of MediaWiki-powered site
    "path": "", // path to api.php script
    "debug": false, // is more verbose when set to true
    "username": user, // account to be used when logIn is called (optional)
    "password": pass, // password to be used when logIn is called (optional)
    "userAgent": "Custom UA", // define custom bot's user agent
    "concurrency": 5 // how many API requests can be run in parallel (defaults to 3)
  });

  client.logIn(err => {
    if (err) {
      console.log(err);
      return;
    }
    client.edit(title, text, resume, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
  });
};

const ensureDirExistence = (path) => {
  // We first try to make a dir. If it was missing, now, it is not
  // anymore.
  try {
    fs.mkdirSync(path);
  } catch (e) {
    // If creation of the dir failed, there can be many reasons.
    // However, if the reason is not “there was already a file
    // there!”, we don't want to ignore the error, so we throw it
    // again.
    if (typeof(e.code) === "undefined" || e.code !== 'EEXIST') {
      throw e;
    }
    // In the case where the path was taken, we want to be sure it
    // is a directory. If the path existed *and* it is a directory,
    // all is good.  Otherwise, we would be asking for trouble by
    // trying to use a file, socket, or whatever as a directory.
    if (!fs.statSync(path).isDirectory()) {
      throw new Error("“" + path + "” is not a directory.");
    }
  }
}

const update_cc_dict = () => {
  const t = path.join(__dirname, dumps, "the_dict_with_examples.csv");
  requestd = request.defaults({
    jar: true
  });
  let uri = "https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/export?format=csv&range=A:B&id=19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw&gid=1855189494";
  requestd({
    uri: uri,
    method: "GET"
  }).on("error", err => {}).pipe(fs.createWriteStream(t)).on("finish", () => {
    const tr = path.join(__dirname, dumps, "eng2jbo.tsv");
    requestd = request.defaults({
      jar: true
    });
    uri = "https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/pub?gid=1968461413&single=true&output=tsv";
    requestd({
      uri: uri,
      method: "GET"
    }).on("error", err => {}).pipe(fs.createWriteStream(tr)).on("finish", () => {
      let tr = path.join(__dirname, dumps, "eng2jbo.tsv");
      let takei = fs.readFileSync(tr, {
        encoding: 'utf8'
      });
      let x = takei.replace(/_/g, "").replace(/'/g, "&apos;").split('\n');
      x.shift();
      x = x.sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase())
      ); //x is our array
      let xcll = x.slice();
      for (let i = 0; i < x.length; i++) {
        y = x[i].split('\t');
        y[0] = ("''" + y[0] + "''").replace(/^''(.*?) \[(.*?)\]''$/, "''<small>$2</small> $1''");
        y[2] = ("''" + y[2] + "''").replace(/^''(.*?) \[(.*?)\]''$/, "''<small>$2</small> $1''");
        y[1] = y[1].replace(/^([^\{\}@]+)$/, "'''$1'''").replace(/, /g, "''', '''");
        y[3] = y[3].replace(/^([^\{\}@]+)$/, "'''$1'''").replace(/, /g, "''', '''");
        x[i] = y[0] + "  –  " + y[1];
        xcll[i] = y[1] + "  –  " + y[3];
      }
      const txt = x.join("\n\n").replace(/\{(.*?)\}/g, "'''$1'''").replace(/@@@(.*?)@@@/g, "''$1''");
      takei = fs.writeFileSync(tr + ".temp", txt);
      fs.renameSync(tr + ".temp", tr);
      console.log("The Dictionary with Examples' Eng2Jbo .tsv file updated");

      // mw_edit("L17-04", txt, "zmiku se jmina"); //title,text,resume
      //todo: reuse takei for .xml dump
      for (const xx in x) {
        x[xx] = x[xx].replace(/'''(.*?)'''/g, "{$1}").replace(/^''(.*?)''  –  (.*?)$/, "<valsi word=\"$1\" lang=\"en\">\n\t<definition>$2</definition>\n</valsi>");
      }
      takei = x.join("\n\n").replace(/<(|\/)(small)>|&nbsp;/igm, "");
      //now jbo2eng
      let take = fs.readFileSync(t, {
        encoding: 'utf8'
      }) + "\n";
      take = take.replace(/➜/igm, "=>")
        .replace(/\$.*?\$/g, i => {
          console.log(i, i.substring(1, i.length - 1).replace(/(\w+)_(\d+)/, "$1<sub>$2</sub>"));
          return i.substring(1, i.length - 1).replace(/(\w+)_(\d+)/, "$1<sub>$2</sub>");
        })
        .replace(/&/igm, "&amp;")
        // .replace(/''x<sub>([^<]*?)<\/sub><sub>([^<]*?)<\/sub>''/g, (s,a,b) => {
        //   console.log(s);
        // 	return `$x_${a} ${b}$`.replace(/ /igm,'\:');
        // })
        // .replace(/''x<sub>([^<]*?)<\/sub><sub>([^<]*?)<\/sub>''/igm, "$x_$1 $2$")
        .replace(/<(|\/)(small)>|&nbsp;/igm, "")
        .replace(/^(.+?),\"(\n|\r)(.+?) \[(.+?)\] — (.+?)(\n|\r)/igm, "<valsi word=\"$1\" class=\"$4\">\n\t<definition>$5</definition>\n")
        .replace(/^(.+?),\"(\n|\r)(.+?) — (.+?)(\n|\r)/igm, "<valsi word=\"$1\">\n\t<definition>$4</definition>\n")
        .replace(/\"<\/definition>\n/igm, "</definition>\"\n")
        .replace(/\"(\n|\r)/igm, "\n</valsi>\n")
        .replace(/^:'''(.*?)''' — ''(.*?)''$/igm, "\t<example phrase=\"$1\">$2</example>")
        .replace(/^:Comment: (.*?)$/igm, "\t<notes>$1</notes>")
        .replace(/^:Related words: (.*?)$/igm, "\t<related>$1</related>")
        .replace(/^(: *.*?)_\. *$/igm, "$1.")
        .replace(/^: *(.*?)$/igm, "\t<gloss>$1</gloss>")
        .replace(/'''(.*?)'''/igm, "{$1}").replace(/''(.*?)''/igm, "‘$1’");
      take = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<?xml-stylesheet type=\"text/xsl\" href=\"jbovlaste.xsl\"?>\n<dictionary>\n<direction from=\"lojban\" to=\"English (with examples)\">\n" + intro + "\n" + take + "\n" + takei + "</direction>\n</dictionary>";
      take = take.replace(/ {2,}/g, " ");
      take = fs.writeFileSync(t + ".temp", take);
      fs.renameSync(t + ".temp", path.join(__dirname, dumps, "jb.xml"));
      console.log("Dictionary with Examples updated");
      let uri = "https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/pub?single=true&gid=1855189494&range=B1:B3000&output=csv";
      requestd({
        uri: uri,
        method: "GET"
      }, (err, response, body) => {
        const d = body.replace(/\$.*?\$/g, i => i.substring(1, i.length - 1).replace(/(\w+)_(\d+)/, "$1<sub>$2</sub>")).split("\n").map(a => {
          a = a.replace(/[\"_]/, '');
          return a;
        }).join("\n").replace(/ {2,}/g, ' ');
        // mw_edit("L17-03", d, "zmiku se jmina"); //title,text,resume
      });
      //
      tr = path.join(__dirname, dumps, "eng2jbo.tsv");
      requestd = request.defaults({
        jar: true
      });
      uri = "https://docs.google.com/spreadsheets/d/19faXeZCUuZ_uL6qcpQdMhetTXiKc5ZsOcZkYiAZ_pRw/pub?gid=1968461413&single=true&output=tsv";
      //start la sutysisku's dump preparations, make from .xml file
      // LUJVO CONSTRUCTOR PART
      const C = "(" + "[bcdfgjklmnprstvxz]" + ")";
      const V = "(" + "[aeiou]" + ")";
      const Vy = "(" + "[aeiouy]" + ")";
      const CC = "(" + "[bcfgkmpsvx][lr]|[td]r|[cs][pftkmn]|[jz][bvdgm]|t[cs]|d[jz]" + ")";
      const C_C = "(" + "[bdgjvzcfkpstx][lrmn]|[lrn][bdgjvzcfkpstx]|b[dgjvz]|d[bgjvz]|g[bdjvz]|j[bdgv]|v[bdgjz]|z[bdgv]|c[fkpt]|f[ckpstx]|k[cfpst]|p[cfkstx]|s[fkptx]|t[cfkpsx]|x[fpst]|l[rmn]|r[lmn]|m[lrnbdgjvcfkpstx]|n[lrm]" + ")";
      const CxC = "(" + "[lmnr][bcdfgjkpstvx]|l[mnrz]|mn|n[lmrz]|r[lmnz]|b[dgjmnvz]|d[bglmnv]|g[bdjmnvz]|[jz][lnr]|v[bdgjmnz]|f[ckmnpstx]|k[cfmnpst]|p[cfkmnstx]|sx|t[fklmnpx]|x[fmnpst]" + ")";
      const CyC = "(" + "(" + C + ")\\2|[bdgjvz][cfkpstx]|[cfkpstx][bdgjvz]|[cjsz]{2,2}|[ck]x|x[ck]|mz" + ")";
      const CCV = "(" + CC + V + ")";
      const CVV = "(" + C + "(?:ai|au|ei|oi|" + V + "'" + V + ")" + ")";
      const CVC = "(" + C + V + C + ")";
      const gism = "(" + CC + V + C + "|" + C + V + C_C + ")";

      const xugismu = inp => {
        const myreg = new RegExp("^" + gism + V + "$", "gm");
        if ((inp.match(myreg) || []).length == 1) {
          return true;
        } else {
          return false;
        }
      };
      //actual la sutysisku's dump
      const lng = 'jb';
      const xmlDoc = libxmljs.parseXml(fs.readFileSync(path.join(__dirname, dumps, lng + ".xml"), {
        encoding: 'utf8'
      }));
      let pars = 'sorcu["jb"] = {';
      const rev = xmlDoc.find("/dictionary/direction[1]/valsi");
      String.prototype.unquote = () => {
        return this.replace(/"([^"]+)"/g, "‘$1’").replace(/\\/g, "\\\\").replace(/"/g, "");
      };
      for (let i = 0; i < rev.length; i++) {
        const hi = rev[i].attr("word").value().replace("\\", "\\\\");
        pars += "\"" + hi + "\":{";
        let wascomma = '';
        try {
          pars += wascomma + "\"t\":\"" + rev[i].attr("type").value().replace(/\\/g, "\\\\") + "\"";
          wascomma = ',';
        } catch (err) {}
        try {
          pars += wascomma + "\"s\":\"" + rev[i].find("selmaho[1]")[0].text().unquote() + "\"";
          wascomma = ',';
        } catch (err) {}
        try {
          pars += wascomma + "\"l\":\"" + rev[i].attr("lang").value() + "\"";
          wascomma = ',';
        } catch (err) {}
        try {
          pars += wascomma + "\"d\":\"" + rev[i].find("definition[1]")[0].text().unquote() + "\"";
          wascomma = ',';
        } catch (err) {}
        try {
          pars += wascomma + "\"n\":\"" + rev[i].find("notes[1]")[0].text().unquote() + "\"";
          wascomma = ',';
        } catch (err) {}
        try {
          pars += wascomma + "\"g\":\"" + rev[i].find("glossword/@word").join(";").replace(/ word=\"(.*?)\"/g, "$1").replace(/"/g, "'").replace("\\", "\\\\") + "\"";
          wascomma = ',';
        } catch (err) {}
        try {
          pars += wascomma + "\"k\":\"" + rev[i].find("related[1]")[0].text().unquote() + "\"";
          wascomma = ',';
        } catch (err) {}
        try {
          pars += wascomma + "\"e\":\"" + rev[i].find("example").toString().replace(/>,</g, ">%<").replace(/<example phrase=\"(.*?)\">(.*?)<\/example>/g, "$1 — $2").replace(/"+([^\"]*?)"+/g, '‘$1’') + "\"";
          wascomma = ',';
        } catch (err) {}
        let ra = rev[i].find("rafsi//text()[1]");
        if (xugismu(hi) === true) {
          if (hi.indexOf("brod") !== 0) {
            ra.push(hi.substr(0, 4));
          } else if (hi.indexOf("broda") === 0) {
            ra.push("brod");
          }
          ra.push(hi);
        }
        ra = ra.join("\",\"");

        if (ra.length !== 0) {
          pars += wascomma + "\"r\":[\"" + ra + "\"]";
        }
        pars += "}";
        if (i < rev.length - 1) {
          pars += ",\n";
        } //\n
      }
      pars += "};\n";
      let tt = path.join(__dirname, "../../i/data", "parsed-" + lng + ".js");
      pars = fs.writeFileSync(tt + ".temp", pars.replace(/,\"[eg]\":\"\"/g, "").replace(/&amp;/g, "&"));
      fs.renameSync(tt + ".temp", tt);
      tt = path.join(__dirname, "../../i/" + lng + "/", "webapp.appcache");
      try {
        pars = fs.readFileSync(tt, {
          encoding: 'utf8'
        });
        pars = fs.writeFileSync(tt, pars);
        console.log(tt + ' updated');
      } catch (err) {}
    })
  })
}

// update_cc_dict();
